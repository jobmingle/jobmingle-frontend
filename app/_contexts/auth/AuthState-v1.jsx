"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	CONFIRMATION_SUCCESS,
	CONFIRMATION_FAIL,
	USER_LOADED,
	USER_UPDATED,
	USERNAME_UPDATED,
	USER_EMAIL_UPDATED,
	USERIMAGE_UPDATED,
	USERPASSWORD_UPDATED,
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
import { type } from "os";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function AuthProvider({ children }) {
	const initialState = {
		token:
			typeof window !== "undefined" ? sessionStorage.getItem("token") : null,
		isAuthenticated:
			typeof window !== "undefined" ? sessionStorage.getItem("token") : null,
		resetOk: null,
		isLoading: false,
		// user:
		// 	typeof window !== "undefined"
		// 		? JSON.parse(sessionStorage?.getItem("user"))
		// 		: null,
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
				const token = sessionStorage.getItem("token");
				if (!token) throw new Error("No token found");

				const res = await axios.get(`${BASE_URL}/me`, {
					headers: { Authorization: `Bearer ${token}` },
					"Content-Type": "application/json",
				});

				dispatch({ type: USER_LOADED, payload: res.data });
				localStorage.setItem("user", JSON.stringify(res.data));

				// console.log(res);
			} catch (err) {
				dispatch({ type: AUTH_ERROR });
				sessionStorage.removeItem("token");
				localStorage.removeItem("user");
			}
		}
		if (token) fetchUser();
		// eslint-disable-next-line
	}, []);

	// USER PERSIST ACROSS TABS
	useEffect(() => {
		// Check if user info is in localStorage and update state
		const userData = JSON.parse(localStorage.getItem("user"));
		if (userData) {
			dispatch({ type: "LOGIN_SUCCESS", payload: userData });
		}

		// Sync state across tabs using BroadcastChannel API
		const channel = new BroadcastChannel("auth_channel");
		channel.onmessage = (event) => {
			if (event.data.type === "LOGIN_SUCCESS") {
				dispatch({ type: "LOGIN_SUCCESS", payload: event.data.payload });
			} else if (event.data.type === "LOGOUT") {
				dispatch({ type: "LOGOUT" });
			}
		};

		return () => {
			channel.close();
		};
	}, []);

	useEffect(() => {
		// Persist user data in localStorage whenever it changes
		if (user) {
			localStorage.setItem("user", JSON.stringify(user));
		} else {
			localStorage.removeItem("user");
		}

		// Notify other tabs about the state change
		const channel = new BroadcastChannel("auth_channel");
		if (user) {
			channel.postMessage({ type: "LOGIN_SUCCESS", payload: user });
		} else {
			channel.postMessage({ type: "LOGOUT" });
		}
	}, [user]);

	// CHECK SESSION EXPIRATION
	const checkSessionExpiration = () => {
		const expiresAt = sessionStorage.getItem("expiresAt");

		if (expiresAt && Date.now() >= parseInt(expiresAt, 10)) {
			// Session expired
			logout();
			toast("Session expired. Please log in again.", { icon: "🔏" });
		}
	};

	// RESTORE SESSION ON APP LOAD
	useEffect(() => {
		const token = sessionStorage.getItem("token");
		const user = sessionStorage.getItem("user");
		const expiresAt = sessionStorage.getItem("expiresAt");

		if (token && user && expiresAt && Date.now() < parseInt(expiresAt, 10)) {
			dispatch({
				type: "LOGIN_SUCCESS",
				payload: { token, user: JSON.parse(user) },
			});

			// Timer for session expiration
			const timeout = parseInt(expiresAt, 10) - Date.now();

			const timer = setTimeout(checkSessionExpiration, timeout);

			return () => clearTimeout(timer);
		}

		// const timeout = parseInt(expiresAt, 10) - Date.now();
		// if (timeout > 0) {
		// 	const timer = setTimeout(() => {
		// 		logout();
		// 		toast("Session expired. Please log in again.", { icon: "🔏" });
		// 	}, timeout);

		// 	return () => clearTimeout(timer); // Cleanup on unmount
		// } else {
		// 	logout(); // If already expired
		// }
		// eslint-disable-next-line
	}, []);

	/*
	// CHECK SESSION EXPIRATION
	useEffect(() => {
		const checkSessionExpiration = () => {
			const expiresAt = sessionStorage.getItem("expiresAt");
			if (expiresAt && Date.now() > parseInt(expiresAt, 10)) {
				// Session expired
				logout();
			}
		};

		// if (initialState.token) {
		checkSessionExpiration();
		// }
	}, []);

	// LOAD USER
	useEffect(() => {
		async function fetchUser() {
			dispatch({ type: LOADING });

			try {
				const token = sessionStorage.getItem("token");
				if (!token) throw new Error("No token found");

				const res = await axios.get(`${BASE_URL}/me`, {
					headers: { Authorization: `Bearer ${token}` },
					"Content-Type": "application/json",
				});

				dispatch({ type: USER_LOADED, payload: res.data });
				localStorage.setItem("user", JSON.stringify(res.data));
			} catch (err) {
				dispatch({ type: AUTH_ERROR });
				sessionStorage.removeItem("token");
				localStorage.removeItem("user");
			}
		}
		if (initialState.token) fetchUser();
		// eslint-disable-next-line
	}, []);

	// AUTOMATIC EXPIRATION
	useEffect(() => {
		const expiresAt = sessionStorage.getItem("expiresAt");
		if (expiresAt) {
			const timeout = parseInt(expiresAt, 10) - Date.now();

			if (timeout > 0) {
				const timer = setTimeout(() => {
					logout();
					toast("Session expired. Please log in again.", {
						icon: "🔏",
					});
				}, timeout);

				return () => clearTimeout(timer); // Cleanup on unmount
			} else {
				logout(); // If already expired
			}
		}
	}, []);
*/

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
			sessionStorage.setItem("userId", res?.data?.data?.user_id);

			// console.log(res.data);
			// console.log(res.data.data.user_id);
			await router.push("/sign-up/confirm-email");
			toast.success(res?.data.message);
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
			throw Error(err?.response?.data.message || err.message);
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
			const base64Image = await convertFileToBase64(userData.image);
			const formData = {
				...userData,
				image: base64Image,
			};
			console.log(formData);

			const userId = sessionStorage.getItem("userId");
			// console.log(userId);
			const res = await axios.put(
				`${BASE_URL}/users/${userId}/update-profile`,
				formData,
				{
					headers: {
						"Content-Type": "application/json",
						// "Content-Type": "multipart/form-data",
					},
				}
			);
			localStorage.setItem("token", res?.data?.token);
			localStorage.setItem("user", JSON.stringify(res?.data?.data));
			Cookies.set("auth_token", res?.data.token, {
				path: "/",
				expires: 24 * 60 * 60,
				secure: process.env.NODE_ENV === "production",
				sameSite: "Strict",
			});

			// Store the expiration time
			// const expirationTime = Date.now() + 60 * 1000; // 1 min
			const expirationTime = Date.now() + 60 * 60 * 1000; // 1 hour
			sessionStorage.setItem("expiresAt", expirationTime);

			console.log(res);
			console.log(res.data);
			dispatch({ type: USER_UPDATED, payload: res?.data?.data });
			toast.success(`${res?.data?.message}`);
		} catch (err) {
			dispatch({
				type: UPDATE_ERROR,
				payload: err?.response?.data.message || err.message,
			});
			throw Error(err?.response?.data.message);
		}
	}

	//  UPDATE PASSWORD
	async function updatePassword(id, formData) {
		dispatch({ type: LOADING });

		try {
			const res = await axios.put(
				`${BASE_URL}/users/${id}/update-password`,
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			dispatch({ type: USERPASSWORD_UPDATED });
			toast.success(res?.data?.message);
			// console.log(res);
			// console.log(res?.data);
		} catch (err) {
			dispatch({
				type: UPDATE_ERROR,
				payload: err?.response?.data.message || err.message,
			});
		}
	}

	//  UPDATE USER NAME
	async function updateUserName(id, formData) {
		dispatch({ type: LOADING });

		try {
			const res = await axios.put(
				`${BASE_URL}/users/${id}/update-name`,
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			dispatch({ type: USERNAME_UPDATED });
			toast.success(res?.data?.message);
			// console.log(res);
			// console.log(res?.data);
		} catch (err) {
			dispatch({
				type: UPDATE_ERROR,
				payload: err?.response?.data.message || err.message,
			});
		}
	}

	//  UPDATE USER EMAIL
	async function updateUserEmail(id, formData) {
		dispatch({ type: LOADING });

		try {
			const res = await axios.put(
				`${BASE_URL}/users/${id}/update-email`,
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			dispatch({ type: USER_EMAIL_UPDATED });
			toast.success(res?.data?.message);
			// console.log(res);
			// console.log(res?.data);
		} catch (err) {
			dispatch({
				type: UPDATE_ERROR,
				payload: err?.response?.data.message || err.message,
			});
		}
	}
	//  UPDATE PROFILE IMAGE
	async function updateProfileImage(userId, Image) {
		dispatch({ type: LOADING });

		try {
			const base64Image = await convertFileToBase64(Image);
			const imageData = {
				image: base64Image,
			};

			const res = await axios.put(
				`${BASE_URL}/users/${userId}/update-image`,
				imageData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			dispatch({ type: USERIMAGE_UPDATED });
			toast.success(res?.data?.message);
			// console.log(res);
			// console.log(res?.data);
		} catch (err) {
			dispatch({
				type: UPDATE_ERROR,
				payload: err?.response?.data.message || err.message,
			});
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

			// const { token } = res.data;

			// const userRes = await axios.get(`${BASE_URL}/me`, {
			// 	headers: { Authorization: `Bearer ${token}` },
			// 	"Content-Type": "application/json",
			// });
			// localStorage.setItem("user", JSON.stringify(userRes?.data));

			localStorage.setItem("token", res?.data?.token);
			localStorage.setItem("user", JSON.stringify(res?.data?.data));
			// document.cookie = `auth_token=${res?.data?.token}; path=/; secure; httponly; samesite=strict`;
			Cookies.set("auth_token", res?.data.token, {
				path: "/",
				expires: 24 * 60 * 60,
				secure: process.env.NODE_ENV === "production",
				sameSite: "Strict",
			});

			// Store the expiration time
			// const expirationTime = Date.now() + 60 * 1000; // 1 min
			const expirationTime = Date.now() + 60 * 60 * 1000; // 1 hour
			sessionStorage.setItem("expiresAt", expirationTime);

			dispatch({ type: LOGIN_SUCCESS, payload: res.data });

			// console.log(res);
			// console.log(res?.data?.data);
			toast.success(`${res?.data?.message} Redirecting to dashboard!`);
		} catch (err) {
			dispatch({
				type: LOGIN_FAIL,
				payload: err?.response?.data.message || err.message,
			});
			throw Error(err?.response?.data.message || err.message);
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

	useEffect(() => {
		const token = sessionStorage.getItem("token");
		if (!token) {
			Cookies.remove("auth_token", { path: "/" });
		}
	}, []);

	// LOGOUT USER
	async function logout() {
		try {
			const token = sessionStorage.getItem("token");
			if (!token) throw new Error("No token found");

			const res = await axios.post(
				`${BASE_URL}/logout`,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			// console.log(res);
			dispatch({ type: "LOGOUT" });
			sessionStorage.removeItem("token");
			localStorage.removeItem("user");
			sessionStorage.removeItem("expiresAt");
			sessionStorage.removeItem("userId");

			localStorage.removeItem("listedJobs");
			router.push("/sign-in");
			Cookies.remove("auth_token", { path: "/" });
			toast("Successfully logged out!", { icon: "🔏" });
		} catch (err) {
			throw Error(err);
		}
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
				updatePassword,
				updateUserName,
				updateProfileImage,
				updateUserEmail,
				login,
				// fetchUser,

				forgotPassword,
				resetPassword,
				logout,
				clearErrors,
				resendVerificationCode,
				convertFileToBase64,
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
