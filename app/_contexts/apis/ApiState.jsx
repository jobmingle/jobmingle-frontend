"use client";
import { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import ApiContext from "./apiContext";
import apiReducer from "./apiReducer";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import {
	JOBS_LOADED,
	LISTED_JOBS_LOADED,
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
	RESET_LISTED_ITEMS,
	LISTED_COURSES_LOADED,
	PAYMENT_SUCCESS,
	PAYMENT_FAILED,
} from "@/app/_contexts/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function ApiProvider({ children }) {
	const initialState = {
		isLoading: false,
		jobs: [],
		listedJobs: [],
		listedCourses: [],
		// jobs:
		// 	typeof window !== "undefined"
		// 		? JSON.parse(localStorage.getItem("jobs"))
		// 		: null,

		job: {},
		courses: [],
		course: {},
		error: null,
	};

	const [
		{ jobs, job, listedJobs, listedCourses, courses, course, error, isLoading },
		dispatch,
	] = useReducer(apiReducer, initialState);
	const [hasFetched, setHasFetched] = useState(0);
	const maxAttempts = 3;
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
		if (!jobs.length && hasFetched < maxAttempts) {
			// if (!jobs) {
			fetchJobs();
			setHasFetched((prev) => prev + 1);
		}
	}, [jobs.length, hasFetched]);

	// FETCH JOB BY ID
	async function getJobById(userId) {
		dispatch({ type: LOADING });

		try {
			const res = await axios.get(`${BASE_URL}/jobs/getJobById/${userId}`, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			dispatch({ type: JOB_LOADED, payload: res.data.data });
			localStorage.setItem("job", JSON.stringify(res.data.data));
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

	// FETCH JOB FOR EMPLOYER
	async function fetchListedJobs() {
		dispatch({ type: LOADING });
		const token = localStorage.getItem("token");
		if (!token) throw new Error("No token found");

		try {
			const res = await axios.get(`${BASE_URL}/jobs/my-jobs`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			dispatch({ type: LISTED_JOBS_LOADED, payload: res.data.data });
			localStorage.setItem("listedJobs", JSON.stringify(res.data.data));
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

	// 		if (!listedJobs.length) {
	// 			fetchListedJobs();
	// 		}
	// 	},
	// 	[listedJobs]
	// );

	// useEffect(() => {
	// 	console.log("Jobs state updated:", jobs);
	// 	console.log("Listed jobs state updated:", jobs);
	// 	Perform actions when jobs state updates
	// }, [jobs, listedJobs]);

	// POST JOB
	async function postJob(jobData) {
		dispatch({ type: LOADING });
		const token = localStorage.getItem("token");
		if (!token) {
			dispatch({ type: JOB_ERROR });
			throw new Error("No token found");
		}

		try {
			const res = await axios.post(`${BASE_URL}/jobs/post-job`, jobData, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			dispatch({ type: JOB_CREATED, payload: res.data.data });
			// toast.success("Job posted successfully! Please await approval");
			toast.success(res?.data?.message);
			// console.log(res);
			// console.log(res.data);
			router.push("/employer-dashboard/jobs");
		} catch (err) {
			dispatch({
				type: JOB_ERROR,
				payload:
					err?.response?.data.errors.company_site[0] ||
					err?.response?.data.message ||
					err?.message,
			});
			throw Error(err?.response?.data?.errors?.company_site[0]);
		}
	}

	// UPDATE JOB
	async function updateJob(jobId, jobData) {
		dispatch({ type: LOADING });
		const token = localStorage.getItem("token");
		if (!token) throw new Error("No token found");

		try {
			const res = await axios.patch(
				`${BASE_URL}/jobs/updateJob/${jobId}`,
				jobData,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			dispatch({ type: JOB_UPDATED, payload: res.data.data });
			// toast.success("Job posted successfully! Please await approval");
			toast.success(res?.data?.message);
			// console.log(res);
			// console.log(res.data);
			router.push("/employer-dashboard");
		} catch (err) {
			dispatch({
				type: JOB_ERROR,
				payload: err?.response?.data.message || err?.message,
			});
			throw Error(err?.response?.data?.message);
		}
	}
	// DELETE JOB
	async function deleteJob(jobId) {
		dispatch({ type: LOADING });
		const token = localStorage.getItem("token");
		if (!token) throw new Error("No token found");

		try {
			const res = await axios.delete(
				`${BASE_URL}/jobs/deleteJob/${jobId}`,
				{},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			dispatch({ type: JOB_DELETED, payload: jobId });
			toast.success(res?.data?.message);
			// console.log(res);
			// console.log(res.data);
			router.push("/employer-dashboard/jobs");
		} catch (err) {
			dispatch({
				type: JOB_ERROR,
				payload: err?.response?.data?.message || err?.message,
			});
			throw Error(err?.response?.data?.message || err?.message);
		}
	}

	// LOAD COURSES
	useEffect(() => {
		async function fetchCourses() {
			dispatch({ type: LOADING });

			try {
				const res = await axios.get(`${BASE_URL}/moodle/getallcourses`, {
					"Content-Type": "application/json",
				});

				dispatch({ type: COURSES_LOADED, payload: res.data.data });
				localStorage.setItem("courses", JSON.stringify(res.data.data));
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
		if (!courses.length) {
			fetchCourses();
		}
	}, [courses]);

	// FETCH COURSES FOR VENDOR
	async function fetchListedCourses(id) {
		dispatch({ type: LOADING });
		const token = localStorage.getItem("token");
		if (!token) throw new Error("No token found");

		try {
			const res = await axios.get(
				`${BASE_URL}/moodle/${id}/get-creator-course`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			dispatch({
				type: LISTED_COURSES_LOADED,
				payload: res?.data?.data.courses,
			});
			localStorage.setItem(
				"listedCourses",
				JSON.stringify(res?.data?.data.courses)
			);
			// console.log(res);
			// console.log(res.data);
			// console.log(res.data.data);
		} catch (err) {
			dispatch({
				type: COURSE_ERROR,
				payload: err?.response?.data.message || err?.message,
			});
			throw Error(err?.response?.data.message);
		}
	}

	// POST COURSE
	async function postCourse(courseData) {
		dispatch({ type: LOADING });
		const token = localStorage.getItem("token");
		if (!token) {
			dispatch({ type: COURSE_ERROR });
			throw new Error("No token found");
		}

		try {
			const res = await axios.post(
				`${BASE_URL}/moodle/create-course`,
				courseData,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			dispatch({ type: COURSE_CREATED, payload: res.data });
			toast.success(
				"Course posted successfully! Please proceed to upload videos"
			);
			// console.log(res);
			// console.log(res.data);
			router.push("/vendor-dashboard/courses");
		} catch (err) {
			dispatch({
				type: COURSE_ERROR,
				payload:
					err?.response?.data.message || err?.message || err?.response?.error,
			});
			throw Error(err?.response?.data?.errors);
		}
	}
	// PAY FOR A COURSE
	async function initiatePayment(courseId, price) {
		dispatch({ type: LOADING });
		const token = localStorage.getItem("token");
		if (!token) {
			dispatch({ type: COURSE_ERROR });
			throw new Error("No token found");
		}

		try {
			const res = await axios.post(
				`${BASE_URL}/moodle/pay`,
				{
					amount: price,
					course_id: courseId,
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			dispatch({ type: PAYMENT_SUCCESS, payload: res.data });
			toast.success(
				"Course posted successfully! Please proceed to upload videos"
			);
			// console.log(res);
			// console.log(res.data);
			router.push("/vendor-dashboard/courses");
		} catch (err) {
			dispatch({
				type: PAYMENT_FAILED,
				payload:
					err?.response?.data.message || err?.message || err?.response?.error,
			});
			throw Error(err?.response?.data?.errors);
		}
	}

	// SHARE FUNCTIONALITY
	function handleShareJob(jobId) {
		const job = jobs?.find((j) => j.id === jobId);
		if (navigator.share) {
			navigator
				.share({
					title: job?.job_role,
					text: `Check out this job: ${job?.job_role} at ${job.company_name}`,
					// url: `${window.location.origin}`,
					url: `${window.location.origin}/jobs/${jobId}`,
					// url: `https://localhost:3000/jobs/${jobId}`,
				})
				.then(() => console.log("Job shared successfully!"))
				.catch((error) => console.error("Error sharing job:", error));
		} else {
			alert("Sharing is not supported on this device.");
		}
	}
	function handleShareCourse(courseId) {
		const course = courses?.find((c) => c.id === courseId);
		if (navigator.share) {
			navigator
				.share({
					title: course?.fullname,
					text: `Check out this course: ${course?.fullname}  ${course.summary}`,
					// url: `${window.location.origin}`,
					url: `${window.location.origin}/courses/${courseId}`,
					// url: `https://localhost:3000/jobs/${jobId}`,
				})
				.then(() => console.log("Course shared successfully!"))
				.catch((error) => console.error("Error sharing job:", error));
		} else {
			alert("Sharing is not supported on this device.");
		}
	}

	async function resetListedItems() {
		try {
			dispatch({ type: RESET_LISTED_ITEMS });
			localStorage.remomveItem("listedJobs");
			localStorage.remomveItem("listedCourses");
		} catch (error) {
			throw Error(error);
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
				jobs,
				listedJobs,
				listedCourses,
				job,
				courses,
				course,
				clearErrors,
				getJobById,
				fetchListedJobs,
				fetchListedCourses,
				resetListedItems,
				handleShareJob,
				handleShareCourse,
				initiatePayment,
				deleteJob,
				postJob,
				updateJob,
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
