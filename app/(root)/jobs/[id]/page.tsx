import JobDetails from "@/app/_components/job/Job";

interface JobPageProps {
	params: { id: string };
}

export default function JobPage({ params }: JobPageProps) {
	return (
		<div>
			<JobDetails params={params} />
		</div>
	);
}
