import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	CONFIRMATION_SUCCESS,
	CONFIRMATION_FAIL,
	USER_LOADED,
	USER_UPDATED,
	USERNAME_UPDATED,
	USERIMAGE_UPDATED,
	USERPASSWORD_UPDATED,
	UPDATE_ERROR,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	RESET_SUCCESS,
	RESET_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
	LOADING,
	USER_EMAIL_UPDATED,
} from "@/app/_contexts/types";

export default function authReducer(state, action) {
	switch (action.type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				// user: JSON.parse(localStorage.getItem("user")),
				user: action.payload,
			};
		case USER_UPDATED:
			return {
				...state,
				isLoading: false,
				isAuthenticated: true,
				user: action.payload,
			};

		case USERNAME_UPDATED:
		case USERIMAGE_UPDATED:
		case USERPASSWORD_UPDATED:
		case USER_EMAIL_UPDATED:
			return {
				...state,
				isLoading: false,
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
				token: localStorage.getItem("token"),
				...state,
				...action.payload,
				isLoading: false,
				token: action.payload.token,
				user: action.payload || action.payload.data,
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
			return {
				...state,
				token: null,
				isAuthenticated: false,
				isLoading: false,
				user: null,
				error: action.payload,
			};
		case UPDATE_ERROR:
			return {
				...state,
				isLoading: false,
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
