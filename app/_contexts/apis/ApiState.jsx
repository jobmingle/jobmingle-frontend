"use client";
import { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import ApiContext from "./apiContext";
import apiReducer from "./apiReducer";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import {
	JOBS_LOADED,
	JOB_LOADED,
	JOB_CREATED,
	JOB_UPDATED,
	JOB_DELETED,
	JOB_ERROR,
	COURSES_LOADED,
	COURSE_LOADED,
	COURSE_CREATED,
	COURSE_UPDATED,
	COURSE_DELETED,
	COURSE_ERROR,
	CLEAR_ERRORS,
	LOADING,
} from "@/app/_contexts/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function ApiProvider({ children }) {
	const initialState = {
		isLoading: false,
		jobs: [],
		// jobs:
		// 	typeof window !== "undefined"
		// 		? JSON.parse(localStorage.getItem("jobs"))
		// 		: null,

		job: {},
		courses: [],
		course: {},
		error: null,
	};

	const [{ jobs, job, courses, course, error, isLoading }, dispatch] =
		useReducer(apiReducer, initialState);

	const router = useRouter();

	// LOAD JOBS
	useEffect(() => {
		async function fetchJobs() {
			dispatch({ type: LOADING });

			try {
				const res = await axios.get(`${BASE_URL}/jobs/getAllJobs`, {
					"Content-Type": "application/json",
				});

				dispatch({ type: JOBS_LOADED, payload: res.data.data });
				localStorage.setItem("jobs", JSON.stringify(res.data.data));
				// console.log(res);
				// console.log(res.data);
				// console.log(res.data.data);
			} catch (err) {
				dispatch({
					type: JOB_ERROR,
					payload: err?.response?.data.message || err?.message,
				});
				throw Error(err?.response?.data.message);
			}
		}
		if (!jobs.length) {
			fetchJobs();
		}
	}, [jobs]);

	// FETCH JOB BY ID
	async function getJobById(userId) {
		dispatch({ type: LOADING });

		try {
			const res = await axios.get(`${BASE_URL}/jobs/getJobById/${userId}`, {
				"Content-Type": "application/json",
			});

			dispatch({ type: JOB_LOADED, payload: res.data.data });
			localStorage.setItem("jobs", JSON.stringify(res.data.data));
			// console.log(res);
			// console.log(res.data);
			// console.log(res.data.data);
		} catch (err) {
			dispatch({
				type: JOB_ERROR,
				payload: err?.response?.data.message || err?.message,
			});
			throw Error(err?.response?.data.message);
		}
	}

	// POST JOBS
	async function postJob(jobData) {
		dispatch({ type: LOADING });

		try {
			const res = await axios.post(`${BASE_URL}/jobs/post-job`, jobData, {
				"Content-Type": "application/json",
			});

			dispatch({ type: JOB_CREATED, payload: res.data });
			// toast.success("Job posted successfully! Please await approval");
			toast.success(res?.message);
			// console.log(res);
			// console.log(res.data);
			router.push("/employer-dashboard");
		} catch (err) {
			dispatch({
				type: JOB_ERROR,
				payload:
					err?.response?.data.errors.company_site[0] ||
					err?.response?.data.message ||
					err?.message,
			});
			throw Error(err?.response?.data.errors.company_site[0]);
		}
	}
	// POST COURSE
	async function postCourse(courseData) {
		dispatch({ type: LOADING });

		try {
			const res = await axios.post(
				`${BASE_URL}/moodle/create-course`,
				courseData,
				{
					"Content-Type": "application/json",
				}
			);

			dispatch({ type: COURSE_CREATED, payload: res.data });
			toast.success(
				"Course posted successfully! Please proceed to upload videos"
			);
			// console.log(res);
			// console.log(res.data);
			router.push("/vendor-dashboard");
		} catch (err) {
			dispatch({
				type: JOB_ERROR,
				payload:
					err?.response?.data.message || err?.message || err?.response?.error,
			});
			throw Error(err?.response?.data?.errors);
		}
	}

	// CLEAR ERRORS
	function clearErrors() {
		dispatch({ type: CLEAR_ERRORS });
	}

	return (
		<ApiContext.Provider
			value={{
				isLoading,
				error,
				clearErrors,
				getJobById,
				jobs,
				job,
				courses,
				course,
				postJob,
				postCourse,
			}}
		>
			{children}
		</ApiContext.Provider>
	);
}

function useJobCourse() {
	const context = useContext(ApiContext);
	if (context === undefined)
		throw new Error("ApiContext was used outside AuthProvider");
	return context;
}

export { ApiProvider, useJobCourse };
