// "use client";
// import { useContext, useEffect, useReducer } from "react";
// import axios from "axios";
// import ApiContext from "./apiContext";
// import apiReducer from "./apiReducer";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";

// import {
// 	JOBS_LOADED,
// 	JOB_CREATED,
// 	JOB_UPDATED,
// 	JOB_DELETED,
// 	JOB_ERROR,
// 	COURSES_LOADED,
// 	COURSE_CREATED,
// 	COURSE_UPDATED,
// 	COURSE_DELETED,
// 	COURSE_ERROR,
// 	CLEAR_ERRORS,
// 	LOADING,
// } from "@/app/_contexts/types";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// function ApiProvider({ children }) {
// 	const initialState = {
// 		isLoading: false,
// 		jobs: [],
// 		courses: [],
// 		error: null,
// 	};

// 	const [{ jobs, error, isLoading }, dispatch] = useReducer(
// 		apiReducer,
// 		initialState
// 	);

// 	const router = useRouter();

// 	// LOAD JOBS
// 	useEffect(() => {
// 		async function fetchJobs() {
// 			dispatch({ type: LOADING });

// 			try {
// 				const res = await axios.get(`${BASE_URL}/jobs/getAllJobs`, {
// 					"Content-Type": "application/json",
// 				});

// 				// dispatch({ type: JOBS_LOADED, payload: res.data.data });
// 				dispatch({ type: JOBS_LOADED });
// 				localStorage.setItem("jobs", JSON.stringify(res.data.data));
// 				console.log(res);
// 				console.log(res.data);
// 				console.log(res.data.data);
// 			} catch (err) {
// 				dispatch({
// 					type: JOB_ERROR,
// 					payload: err?.response?.data.message || err?.message,
// 				});
// 				throw Error(err?.response?.data.message);
// 			}
// 		}
// 		if (!initialState.jobs) {
// 			fetchJobs();
// 		}
// 	}, [initialState.jobs]);

// 	// POST JOBS
// 	async function postJob(jobData) {
// 		dispatch({ type: LOADING });

// 		try {
// 			const res = await axios.post(`${BASE_URL}/jobs/post-job`, jobData, {
// 				"Content-Type": "application/json",
// 			});

// 			dispatch({ type: JOB_CREATED, payload: res.data });
// 			toast.success("Job posted successfully! Please await approval");
// 			console.log(res);
// 			// console.log(res.data);
// 			router.push("/employer-dashboard");
// 		} catch (err) {
// 			dispatch({
// 				type: JOB_ERROR,
// 				payload: err?.response?.data.message || err?.message,
// 			});
// 			console.error(err?.message);
// 			throw Error(err?.response?.data.message);
// 		}
// 	}

// 	// CLEAR ERRORS
// 	function clearErrors() {
// 		dispatch({ type: CLEAR_ERRORS });
// 	}

// 	return (
// 		<ApiContext.Provider
// 			value={{
// 				isLoading,
// 				error,
// 				clearErrors,
// 				jobs,
// 				postJob,
// 			}}
// 		>
// 			{children}
// 		</ApiContext.Provider>
// 	);
// }

// function useJobCourse() {
// 	const context = useContext(ApiContext);
// 	if (context === undefined)
// 		throw new Error("ApiContext was used outside AuthProvider");
// 	return context;
// }

// export { ApiProvider, useJobCourse };
