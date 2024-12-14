import { RootState } from "@/app/_hooks/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
	id: string;
	moodle_user_id: number;
	firstName: string;
	lastName: string;
	email: string;
	email_verified_at: string;
	phoneNumber: string;
	interests: string[];
	goals: string;
	image: string;
	role: string;
	created_at: string;
	updated_at: string;
};

interface AuthState {
	user: UserState | null;
	token: string | null;
	authenticated: boolean;
}

const initialState: AuthState = {
	user: null,
	token: null,
	authenticated: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (
			state,
			action: PayloadAction<Partial<{ user: UserState; token: string }>>
		) => {
			state.user = action.payload?.user ?? state.user;
			state.token = action.payload?.token ?? state.token;
			state.authenticated = true;
		},
		clearUser: (state) => {
			state.user = null;
			state.authenticated = false;
		},
	},
});

export const { setUser, clearUser } = userSlice.actions;

export const user = (state: RootState) => state.userReducer.user;
export const token = (state: RootState) => state.userReducer.token;
export const authenticated = (state: RootState) =>
	state.userReducer.authenticated;

export default userSlice.reducer;
