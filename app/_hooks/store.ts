import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiSlice } from "../_features/appSlices/apiSlice";
import userReducer from "../_features/appSlices/userSlice";

// Configure Persist
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user"],
};

// Combine Reducers
const rootReducer = combineReducers({
	[apiSlice.reducerPath]: apiSlice.reducer,
	userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			apiSlice.middleware
		),
});

// Persistor for hydrating state
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
