import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	CONFIRMATION_SUCCESS,
	CONFIRMATION_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	RESET_SUCCESS,
	RESET_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
	LOADING,
} from "@/app/_contexts/types";

export default function authReducer(state, action) {
	switch (action.type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload,
			};

		case REGISTER_SUCCESS:
		case CONFIRMATION_SUCCESS:
			return {
				...state,
				...action.payload,
				isLoading: false,
				user: action.payload?.user,
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				...action.payload,
				isLoading: false,
				token: localStorage.getItem("token"),
				// isAuthenticated: state.token ? true : null,
				isAuthenticated: true,
			};

		case RESET_SUCCESS:
			return {
				...state,
				...action.payload,
				resetOk: true,
				isLoading: false,
			};

		case REGISTER_FAIL:
		case CONFIRMATION_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case RESET_FAIL:
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				isLoading: false,
				user: null,
				error: action.payload,
			};

		case LOADING:
			return {
				...state,
				isLoading: true,
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
