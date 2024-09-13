"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";

const BASE_URL = "https://45b2-102-89-45-185.ngrok-free.app/api";
const API_URL = "https://react-fast-pizza-api.onrender.com/api";

import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from "@/app/_contexts/types";

function authReducer(state, action) {
	switch (action.type) {
		case "login":
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
				isLoading: false,
			};
		case "fetchUser":
			return {
				...state,
				user: action.payload,
				isLoading: false,
			};
		case "register":
			return {
				...state,
				isLoading: false,
			};
		case "verify":
			return {
				...state,
				isLoading: false,
			};
		case "logout":
			return { ...state, isAuthenticated: false, user: null };
		case "setLoading":
			return { ...state, isLoading: true };

		case "wrongCredentials":
			return { ...state, isAuthenticated: false, error: action.payload };
		case "error":
			return { ...state, error: action.payload };

		default:
			return state;
		// throw new Error("Unknown action type!");
	}
}

function AuthProvider({ children }) {
	const initialState = {
		token: localStorage.getItem("token"),
		isAuthenticated: null,
		isLoading: true,
		user: null,
		error: null,
	};

	const [{ user, isAuthenticated, error, isLoading, token }, dispatch] =
		useReducer(authReducer, initialState);

	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			fetchUser(token);
		} else {
			dispatch({ type: "loading", payload: false });
		}
	}, []);

	async function fetchUser(token) {
		try {
			const res = await axios.get(`${BASE_URL}/user`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			dispatch({ type: "fetchUser", payload: res.data.user });
		} catch (error) {
			dispatch({ type: "error", payload: "Failed to fetch user" });
		}
	}

	async function register(formData) {
		try {
			const res = await axios
				.post(`${BASE_URL}/register`, formData, {
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				})
				.then((res) => console.log(res))
				.catch((err) => console.log(err));

			dispatch({ type: "register" });

			console.log(res);
			window.alert(res?.data.message);

			if (!res) throw Error();

			router.push("/sign-up/confirm-email");
		} catch (err) {
			console.log(`ERROR FROM FETCH REQUEST: ${err}`);
			dispatch({ type: "error", payload: "Registration failed" });
			throw Error("Failed creating your account");
		}
	}

	const verify = async (code) => {
		dispatch({ type: "loading" });
		try {
			const res = await axios.post(`${BASE_URL}/verify-email`, code, {
				withCredentials: true,
			});
			dispatch({ type: "verify" });
			router.push("/sign-in"); // Redirect to login page after verification

			console.log(res);

			window.alert(res?.data.message);
		} catch (err) {
			dispatch({
				type: "error",
				payload: err.response?.data?.message || "Verification failed",
			});
		}
	};

	async function login(logData) {
		try {
			const res = await axios.post(`${BASE_URL}/login`, logData, {
				headers: { "Content-Type": "application/json" },
				withCredentials: true,
			});
			// .then((res) => console.log(res));

			localStorage.setItem("token", res.data.token);

			console.log(res);

			if (email === user.email && password === user.password)
				dispatch({ type: "login", payload: res.data.user });

			if (email !== user.email || password !== user.password)
				dispatch({
					type: "wrongCredentials",
					payload: "Incorrect credentials! Please check your details😒.",
				});

			router.push("/jobs");
			// router.push("/sign-up/verify");
		} catch (err) {
			dispatch({ type: "error", payload: "Login failed" });
			console.log(`ERROR FROM LOGIN REQUEST: ${err}`);
			throw Error("Failed to sign in");
		}
	}

	function logout() {
		localStorage.removeItem("token");
		dispatch({ type: "logout" });
		router.push("/login");
	}

	return (
		<AuthContext.Provider
			value={{
				token,
				isAuthenticated,
				isLoading,
				user,
				error,
				login,
				logout,
				register,
				verify,
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
