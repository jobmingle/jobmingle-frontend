"use client";

import { useJobCourse } from "@/app/_contexts/apis/ApiState";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
	const searchParams = useSearchParams();
	const { job, getJobById } = useJobCourse();

	useEffect(() => {
		const jobId = searchParams.get("job");
		console.log(jobId);
		// getJobById(jobId);

		// eslint-disable-next-line
	}, []);
	return <div>JOB PAGE</div>;
}
