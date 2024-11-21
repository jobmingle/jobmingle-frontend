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

export default function apiReducer(state, action) {
	switch (action.type) {
		case JOBS_LOADED:
			return {
				...state,
				jobs: action.payload,
				// jobs: JSON.parse(localStorage.getItem("jobs")),
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
					job._id === action.payload._id ? action.payload : job
				),
				isLoading: false,
			};

		case JOB_DELETED:
			return {
				...state,
				jobs: state.jobs?.filter((job) => job._id !== action.payload),
				isLoading: false,
			};

		case LOADING:
			return {
				...state,
				isLoading: true,
			};
		case JOB_ERROR:
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
