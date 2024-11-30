import {
	LISTED_JOBS_LOADED,
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
	RESET_LISTED_ITEMS,
	LISTED_COURSES_LOADED,
	PAYMENT_SUCCESS,
	PAYMENT_FAILED,
} from "@/app/_contexts/types";

export default function apiReducer(state, action) {
	switch (action.type) {
		case PAYMENT_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case JOBS_LOADED:
			return {
				...state,
				jobs: action.payload,
				// jobs: JSON.parse(localStorage.getItem("jobs")),
				isLoading: false,
			};
		case LISTED_JOBS_LOADED:
			return {
				...state,
				listedJobs: action.payload,
				isLoading: false,
			};
		case LISTED_COURSES_LOADED:
			return {
				...state,
				listedCourses: action.payload,
				isLoading: false,
			};
		case JOB_LOADED:
			return {
				...state,
				job: action.payload,
				isLoading: false,
			};
		case COURSES_LOADED:
			return {
				...state,
				courses: action.payload,
				isLoading: false,
			};
		case JOB_CREATED:
			return {
				...state,
				jobs: [...state.jobs, action.payload],
				// jobs: action.payload,
				isLoading: false,
			};
		case COURSE_CREATED:
			return {
				...state,
				courses: [...state.courses, action.payload],
				// courses: action.payload,
				isLoading: false,
			};
		case JOB_UPDATED:
			return {
				...state,
				jobs: state.jobs.map((job) =>
					job.id === action.payload.id ? action.payload : job
				),
				isLoading: false,
			};

		case JOB_DELETED:
			return {
				...state,
				jobs: state.jobs?.filter((job) => job.id !== action.payload),
				listedJobs: state.listedJobs?.filter(
					(job) => job.id !== action.payload
				),
				isLoading: false,
			};

		case LOADING:
			return {
				...state,
				isLoading: true,
			};
		case RESET_LISTED_ITEMS:
			return {
				...state,
				listedJobs: [],
				listedCourses: [],
			};
		case JOB_ERROR:
		case COURSE_ERROR:
		case PAYMENT_FAILED:
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
}
