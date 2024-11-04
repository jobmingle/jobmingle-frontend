import {
	JOBS_LOADED,
	JOB_CREATED,
	JOB_UPDATED,
	JOB_DELETED,
	JOB_ERROR,
	CLEAR_ERRORS,
	LOADING,
} from "@/app/_contexts/types";

export default function authReducer(state, action) {
	switch (action.type) {
		case JOBS_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload,
			};
		case JOB_CREATED:
			return {
				...state,
				jobs: [action.payload, ...state.jobs],
				loading: false,
			};
		case JOB_UPDATED:
			return {
				...state,
				jobs: state.jobs.map((job) =>
					job._id === action.payload._id ? action.payload : job
				),
				loading: false,
			};

		case JOB_DELETED:
			return {
				...state,
				jobs: state.jobs?.filter((job) => job._id !== action.payload),
				loading: false,
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
