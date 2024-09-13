"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import toast from "react-hot-toast";
import setAuthToken from "@/lib/setAuthToken";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	CONFIRMATION_SUCCESS,
	CONFIRMATION_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	RESET_SUCCESS,
	RESET_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
	LOADING,
} from "@/app/_contexts/types";

const BASE_URL = "http://jobmingle.co/api";
const API_URL = "https://react-fast-pizza-api.onrender.com/api";

function AuthProvider({ children }) {
	const initialState = {
		token: localStorage.getItem("token"),
		isAuthenticated: null,
		resetOk: null,
		isLoading: false,
		user: null,
		error: null,
	};

	const [
		{ user, isAuthenticated, error, isLoading, token, resetOk },
		dispatch,
	] = useReducer(authReducer, initialState);

	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("token");
		console.log(token);
		if (token) {
			// fetchUser(token);
		} else {
			dispatch({ type: "loading", payload: false });
		}
	}, []);

	// LOAD USER
	async function fetchUser(token) {
		// if (localStorage.token) {
		// 	setAuthToken(localStorage.token);
		// }

		dispatch({ type: LOADING });

		try {
			const res = await axios.get(`${BASE_URL}/auth`, {
				token,
			});

			dispatch({ type: USER_LOADED, payload: res.data });

			console.log(res);
		} catch (err) {
			console.log(err);
			console.log(err.response);
			dispatch({ type: AUTH_ERROR });
		}
	}

	// REGISTER USER
	async function register(formData) {
		const config = {
			headers: { "Content-Type": "application/json" },
			withCredentials: true,
		};

		dispatch({ type: LOADING });

		try {
			const res = await axios.post(`${BASE_URL}/register`, formData, config);

			dispatch({ type: REGISTER_SUCCESS, payload: res?.data });
			router.push("/sign-up/confirm-email");

			console.log(res);
			toast.success(res?.data.message);

			// fetchUser(res.data.token);

			// router.push("/sign-up/confirm-email");
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err?.response?.data?.message || err.message,
			});
			console.log(err);
			console.log(err.response);
			throw Error("Failed creating your account");
		}
	}

	// VERIFY EMAIL
	const verify = async (code) => {
		const config = {
			headers: { "Content-Type": "application/json" },
			withCredentials: true,
		};

		dispatch({ type: LOADING });

		try {
			const res = await axios.post(`${BASE_URL}/verify-email`, code, config);
			dispatch({ type: CONFIRMATION_SUCCESS });

			router.push("/sign-in"); //

			console.log(res);

			toast.success(res?.data?.message);
		} catch (err) {
			console.log(err.response.data.message);
			dispatch({
				type: CONFIRMATION_FAIL,
				payload: err?.response?.data.message || "Verification failed",
			});
		}
	};

	// RESEND VERIFICATION CODE
	async function resendVerificationCode(email) {
		const config = {
			headers: { "Content-Type": "application/json" },
			withCredentials: true,
		};

		try {
			const res = await axios.post(
				`${BASE_URL}/resend-verification-pin`,
				email,
				config
			);
			console.log(res);

			toast.success(res?.data.message);
		} catch (err) {
			console.log(err.message);
		}
	}

	// LOGIN USER
	async function login(formData) {
		const config = {
			headers: { "Content-Type": "application/json" },
			withCredentials: true,
		};

		dispatch({ type: LOADING });

		try {
			const res = await axios.post(`${BASE_URL}/login`, formData, config);

			dispatch({ type: LOGIN_SUCCESS, payload: res.data });
			// localStorage.setItem('token', res.data.token);

			console.log(res);
			toast.success(res?.data.message);

			// fetchUser();

			// router.push("/sign-up/confirm-email");
		} catch (err) {
			dispatch({
				type: LOGIN_FAIL,
				payload: err?.response.data.message || err.message,
			});
			console.log(err.response.data.message);
			console.log(err.message);
			throw Error("Failed signing into account");
		}
	}

	// PASSWORD RESET REQUEST
	async function forgotPassword(email) {
		dispatch({ type: LOADING });

		try {
			const res = await axios.post(`${BASE_URL}/forgot-password`, email);

			dispatch({ type: RESET_SUCCESS });

			router.push("/sign-in/reset-password");

			console.log(res);
			toast.success(
				"Password reset link sent successfully. Please check your email."
			);
			// router.push("/sign-in/reset-password");
		} catch (err) {
			const errorMessage =
				err.response?.data?.message || "Failed to send reset link.";
			dispatch({ type: AUTH_ERROR, payload: errorMessage });
		}
	}

	// PASSWORD RESET
	async function resetPassword(resetData) {
		const config = {
			headers: { "Content-Type": "application/json" },
			withCredentials: true,
		};

		dispatch({ type: LOADING });

		try {
			await axios.post(`${BASE_URL}/reset-password`, resetData, config);

			dispatch({ type: RESET_SUCCESS });

			// router.push("/sign-in");
			toast.success("Password has been reset successfully.");
		} catch (err) {
			const errorMessage =
				err.response?.data?.message || "Failed to reset password.";
			dispatch({ type: RESET_FAIL, payload: errorMessage });
		}
	}

	// LOGOUT USER
	function logout() {
		dispatch({ type: LOGOUT });
		// router.push("/");
	}

	// CLEAR ERRORS
	function clearErrors() {
		dispatch({ type: CLEAR_ERRORS });
	}

	return (
		<AuthContext.Provider
			value={{
				token,
				isAuthenticated,
				resetOk,
				isLoading,
				user,
				error,
				register,
				verify,
				login,
				forgotPassword,
				resetPassword,
				logout,
				clearErrors,
				resendVerificationCode,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined)
		throw new Error("AuthContext was used outside AuthProvider");
	return context;
}

export { AuthProvider, useAuth };
