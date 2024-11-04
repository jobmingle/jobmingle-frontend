"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import toast from "react-hot-toast";

import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	CONFIRMATION_SUCCESS,
	CONFIRMATION_FAIL,
	USER_LOADED,
	USER_UPDATED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	RESET_SUCCESS,
	RESET_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
	LOADING,
	UPDATE_ERROR,
} from "@/app/_contexts/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function AuthProvider({ children }) {
	const initialState = {
		token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
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

	// LOAD USER
	useEffect(() => {
		async function fetchUser() {
			dispatch({ type: LOADING });

			try {
				const token = localStorage.getItem("token") || null;

				const res = await axios.get(`${BASE_URL}/me`, {
					headers: { Authorization: `Bearer ${token}` },
					"Content-Type": "application/json",
				});

				dispatch({ type: USER_LOADED, payload: res.data });
				// await router.push("/dashboard");

				// console.log(res);
				// console.log(res.data);
			} catch (err) {
				dispatch({ type: AUTH_ERROR });
			}
		}
		if (token) fetchUser();
	}, [token]);

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
			localStorage.setItem("userId", res?.data?.user?.id);

			console.log(res.data);
			await router.push("/sign-up/confirm-email");
			toast.success(res?.data.message);

			// router.push("/sign-up/confirm-email");
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err?.response?.data?.message || err.message,
			});
			throw Error(err?.response?.data.message || err.message);
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

			toast.success(res?.data?.message);
			await router.push("/sign-up/generating-profile"); //
		} catch (err) {
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

			toast.success(res?.data.message);
		} catch (err) {
			// console.log(err.message);
		}
	}

	//   IMAGE   CONVERTER
	const convertFileToBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	};

	// UPDATE USER INTEREST USAGE & IMAGE
	async function updateUser(userData) {
		dispatch({ type: LOADING });

		try {
			// const res = await axios.put(`${BASE_URL}/users/${userId}`, formData, {
			const userId = localStorage.getItem("userId");
			console.log(userId);
			const res = await axios.put(
				`${BASE_URL}/users/${userId}/update-profile`,
				userData,
				{
					headers: {
						"Content-Type": "application/json",
						// "Content-Type": "multipart/form-data",
					},
				}
			);
			console.log(res);
			dispatch({ type: USER_UPDATED, payload: res?.data });
			await router.push("/sign-in");
		} catch (err) {
			dispatch({
				type: UPDATE_ERROR,
				payload: err?.response?.data.message || err.message,
			});
			throw Error(err?.response?.data.message);
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
			localStorage.setItem("token", res.data.token);
			console.log(res);
			toast.success(res?.data.message);

			await router.push("/dashboard");
		} catch (err) {
			dispatch({
				type: LOGIN_FAIL,
				payload: err?.response.data.message || err.message,
			});

			throw Error("Failed signing into account");
		}
	}

	// PASSWORD RESET REQUEST
	async function forgotPassword(email) {
		dispatch({ type: LOADING });

		try {
			const res = await axios.post(`${BASE_URL}/forgot-password`, email);

			dispatch({ type: RESET_SUCCESS });

			toast.success(
				"Password reset link sent successfully. Please check your email."
			);
			await router.push("/sign-in/reset-password");
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

			toast.success("Password has been reset successfully.");
			await router.push("/sign-in");
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
				updateUser,
				login,
				// fetchUser,
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
