import axios from "axios";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// const router = useRouter();

export async function fetchJobs() {
	const res = await fetch(`${BASE_URL}/jobs/getAllJobs`, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = res.json();
	return data;
}

// FETCH JOB BY ID
// export  async function getJobById(userId) {
// 	try {
// 		const res = await axios.get(`${BASE_URL}/jobs/getJobById/${userId}`, {
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		});

// 		localStorage.setItem("job", JSON.stringify(res.data.data));
// 		// console.log(res);
// 		// console.log(res.data);
// 		// console.log(res.data.data);
// 	} catch (err) {
// 		throw Error(err);
// 	}
// }
/*
// FETCH JOB FOR EMPLOYER
export  async function fetchListedJobs() {
	const token = localStorage.getItem("token");
	if (!token) throw new Error("No token found");

	try {
		const res = await axios.get(`${BASE_URL}/jobs/my-jobs`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		localStorage.setItem("listedJobs", JSON.stringify(res.data.data));
		// console.log(res);
		// console.log(res.data);
		// console.log(res.data.data);
	} catch (err) {
		throw Error(err);
	}
}

export  async function postJob(jobData) {
	const token = localStorage.getItem("token");
	if (!token) {
		throw new Error("No token found");
	}

	try {
		const res = await axios.post(`${BASE_URL}/jobs/post-job`, jobData, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		// toast.success("Job posted successfully! Please await approval");
		toast.success(res?.data?.message);
		// console.log(res);
		// console.log(res.data);
		router.push("/employer-dashboard/jobs");
	} catch (err) {
		throw Error(err?.company_site[0]);
	}
}

// UPDATE JOB
export  async function updateJob(jobId, jobData) {
	const token = localStorage.getItem("token");
	if (!token) throw new Error("No token found");

	try {
		const res = await axios.patch(
			`${BASE_URL}/jobs/updateJob/${jobId}`,
			jobData,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);

		// toast.success("Job posted successfully! Please await approval");
		toast.success(res?.data?.message);
		// console.log(res);
		// console.log(res.data);
		router.push("/employer-dashboard");
	} catch (err) {
		throw Error(err);
	}
}
// DELETE JOB
export  async function deleteJob(jobId) {
	const token = localStorage.getItem("token");
	if (!token) throw new Error("No token found");

	try {
		const res = await axios.delete(
			`${BASE_URL}/jobs/deleteJob/${jobId}`,
			{},
      {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);

		toast.success(res?.data?.message);
		// console.log(res);
		// console.log(res.data);
		router.push("/employer-dashboard/jobs");
	} catch (err) {
		throw Error(err);
	}
}

// LOAD COURSES
useEffect(() => {
	export  async function fetchCourses() {
		try {
			const res = await axios.get(`${BASE_URL}/moodle/getallcourses`, {
			headers:{	"Content-Type": "application/json",}			});

			localStorage.setItem("courses", JSON.stringify(res.data.data));
			// console.log(res);
			// console.log(res.data);
			// console.log(res.data.data);
		} catch (err) {
			throw Error(err);
		}
	}

	fetchCourses();
}, []);

// FETCH COURSES FOR VENDOR
export  async function fetchListedCourses(id) {
	const token = localStorage.getItem("token");
	if (!token) throw new Error("No token found");

	try {
		const res = await axios.get(`${BASE_URL}/moodle/${id}/get-creator-course`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		localStorage.setItem(
			"listedCourses",
			JSON.stringify(res?.data?.data.courses)
		);
		console.log(res);
		// console.log(res.data);
		// console.log(res.data.data);
	} catch (err) {
		throw Error(err);
	}
}

// POST COURSE
export  async function postCourse(courseData) {
	const token = localStorage.getItem("token");
	if (!token) {
		throw new Error("No token found");
	}

	try {
		const res = await axios.post(
			`${BASE_URL}/moodle/create-course`,
			courseData,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);

		toast.success(
			"Course posted successfully! Please proceed to upload videos"
		);
		// console.log(res);
		// console.log(res.data);
		router.push("/vendor-dashboard/courses");
	} catch (err) {
		throw Error(err);
	}
}
// PAY FOR A COURSE
export  async function initiatePayment(courseId, price) {
	const token = localStorage.getItem("token");
	if (!token) {
		throw new Error("No token found");
	}

	try {
		const res = await axios.post(
			`${BASE_URL}/moodle/pay`,
			{
				amount: price,
				course_id: courseId,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);

		toast.success(
			"Course posted successfully! Please proceed to upload videos"
		);
		// console.log(res);
		// console.log(res.data);
		router.push("/vendor-dashboard/courses");
	} catch (err) {
		throw Error(err);
	}
}

// SHARE FUNCTIONALITY
export  function handleShareJob(jobId) {
	const job = jobs?.find((j) => j.id === jobId);
	if (navigator.share) {
		navigator
			.share({
				title: job?.job_role,
				text: `Check out this job: ${job?.job_role} at ${job.company_name}`,
				// url: `${window.location.origin}`,
				url: `${window.location.origin}/jobs/${jobId}`,
				// url: `https://localhost:3000/jobs/${jobId}`,
			})
			.then(() => console.log("Job shared successfully!"))
			.catch((error) => console.error("Error sharing job:", error));
	} else {
		alert("Sharing is not supported on this device.");
	}
}
function handleShareCourse(courseId, courses) {
	const course = courses?.find((c) => c.id === courseId);
	if (navigator.share) {
		navigator
			.share({
				title: course?.fullname,
				text: `Check out this course: ${course?.fullname}  ${course.summary}`,
				// url: `${window.location.origin}`,
				url: `${window.location.origin}/courses/${courseId}`,
				// url: `https://localhost:3000/jobs/${jobId}`,
			})
			.then(() => console.log("Course shared successfully!"))
			.catch((error) => console.error("Error sharing job:", error));
	} else {
		alert("Sharing is not supported on this device.");
	}
}

export  async function resetListedItems() {
	try {
		localStorage.remomveItem("listedJobs");
		localStorage.remomveItem("listedCourses");
	} catch (error) {
		throw Error(error);
	}
}
*/
