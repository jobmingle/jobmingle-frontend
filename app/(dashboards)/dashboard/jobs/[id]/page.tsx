import JobDetails from "@/app/_components/job/Job";

interface JobPageProps {
	params: {
		id: string;
	};
}

export default function JobPage({ params }: JobPageProps) {
	console.log(params);
	return (
		<div>
			<JobDetails params={params} />
		</div>
	);
}
