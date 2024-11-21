import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const formatCurrency = (value) =>
	new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(
		value
	);

export function getGreeting(time) {
	if (time >= 0 && time < 12) {
		return "Morning"; // Midnight to 11:59 AM
	} else if (time >= 12 && time < 17) {
		return "Afternoon"; // 12:00 PM to 4:59 PM
	} else {
		return "Evening"; // 5:00 PM to 11:59 PM
	}
}

export function timeAgo(timestamp) {
	const createdDate = new Date(timestamp);
	const now = new Date();
	const seconds = Math.floor((now - createdDate) / 1000);

	// Define time intervals in seconds
	const intervals = {
		year: 365 * 24 * 60 * 60,
		month: 30 * 24 * 60 * 60,
		week: 7 * 24 * 60 * 60,
		day: 24 * 60 * 60,
		hour: 60 * 60,
		minute: 60,
	};

	// Calculate time difference in the largest unit possible
	for (const [unit, value] of Object.entries(intervals)) {
		const intervalCount = Math.floor(seconds / value);
		if (intervalCount > 0) {
			return `${intervalCount} ${unit}${intervalCount > 1 ? "s" : ""} ago`;
		}
	}
	return "Just now";
}

export async function SubmitContactForm(formData, setIsLoadingContactSubmit) {
	try {
		const res = await axios.post(`${BASE_URL}/contact-us`, formData, {
			"Content-Type": "application/json",
		});

		toast.success(res.data.message);
	} catch (err) {
		throw Error(err?.response?.data.message || err.message);
	} finally {
		setIsLoadingContactSubmit(false);
	}
}

// API GEOCODING
export async function getAddress({ latitude, longitude }) {
	const res = await fetch(
		`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
	);
	if (!res.ok) throw Error("Failed getting address");

	const data = await res.json();
	return data;
}

// Get Position
function getPosition() {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

// FETCH USER ADDRESS FROM GEOCODING
export async function fetchAddress() {
	// 1) We get the user's geolocation position
	const positionObj = await getPosition();
	const position = {
		latitude: positionObj.coords.latitude,
		longitude: positionObj.coords.longitude,
	};

	// 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
	const addressObj = await getAddress(position);
	const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

	// 3) Then we return an object with the data that we are interested in
	// Payload of the fulfilled state
	return { position, address };
}
