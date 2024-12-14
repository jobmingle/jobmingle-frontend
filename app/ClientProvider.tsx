"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./_hooks/store";
import AppLoader from "./_components/ui/AppLoader";

function ClientProvider({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<PersistGate loading={<AppLoader />} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
}
export default ClientProvider;
