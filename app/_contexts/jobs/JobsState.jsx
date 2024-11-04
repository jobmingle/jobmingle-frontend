import { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import JobContext from "./jobsContext";
import jobReducer from "./jobsReducer";

import {
	JOBS_LOADED,
	JOB_CREATED,
	JOB_UPDATED,
	JOB_DELETED,
	JOB_ERROR,
	CLEAR_ERRORS,
	LOADING,
} from "@/app/_contexts/types";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function JobProvider({ children }) {
	const initialState = {
		isLoading: false,
		jobs: null,
		error: null,
	};

	const [{ jobs, error, isLoading }, dispatch] = useReducer(
		jobReducer,
		initialState
	);

	// LOAD JOBS
	useEffect(() => {
		async function fetchJobs() {
			dispatch({ type: LOADING });

			try {
				const res = await axios.get(`${BASE_URL}/jobs/getAllJobs`, {
					"Content-Type": "application/json",
				});

				dispatch({ type: JOBS_LOADED, payload: res.data });

				console.log(res);
				// console.log(res.data);
			} catch (err) {
				dispatch({
					type: JOB_ERROR,
					payload: err?.response?.data.message || err?.message,
				});
				throw Error(err?.response?.data.message);
			}
		}
		// fetchJobs();
	}, []);

	// POST JOBS

	async function postJob(jobData) {
		dispatch({ type: LOADING });

		try {
			const res = await axios.post(`${BASE_URL}/jobs/post-job`, jobData, {
				"Content-Type": "application/json",
			});

			dispatch({ type: JOB_CREATED, payload: res.data });
			toast.success("Job posted successfully! Please await approval");
			console.log(res);
			// console.log(res.data);
		} catch (err) {
			dispatch({
				type: JOB_ERROR,
				payload: err?.response?.data.message || err?.message,
			});
			throw Error(err?.response?.data.message);
		}
	}

	// CLEAR ERRORS
	function clearErrors() {
		dispatch({ type: CLEAR_ERRORS });
	}

	return (
		<JobContext.Provider
			value={{
				isLoading,
				error,
				clearErrors,
				jobs,
				postJob,
			}}
		>
			{children}
		</JobContext.Provider>
	);
}

function useJob() {
	const context = useContext(JobContext);
	if (context === undefined)
		throw new Error("JobContext was used outside AuthProvider");
	return context;
}

export { JobProvider, useJob };
