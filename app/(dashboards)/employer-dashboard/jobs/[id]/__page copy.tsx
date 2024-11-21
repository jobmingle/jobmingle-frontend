import axios from "axios";
import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface Job {
	id: string;
	title: string;
	description: string;
}

interface JobPageProps {
	job: Job;
}

const Page: React.FC<JobPageProps> = ({ job }) => {
	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold">{job.title}</h1>
			<p className="mt-2">{job.description}</p>
		</div>
	);
};

export function generateStaticParams() {
	// Example: Generating static params for job ids
	// You should replace this with an actual API call to fetch available job ids

	const jobIds = ["1", "2", "3"]; // Replace with dynamic fetching logic

	return jobIds.map((id) => ({
		id, // this must match the dynamic parameter in [id]
	}));
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { id } = context.params!;

	// Simulate fetching data (you would replace this with an API call)
	try {
		// Fetch job details from API
		const response = await axios.post(
			`https://rosybrown-spider-442940.hostingersite.com/api/jobs/getJobById/${id}`
		);
		console.log(response);
		const job = response.data;

		// Check if the job exists
		if (!response) {
			return { notFound: true };
		}

		return {
			props: {
				job, // Pass job data as a prop to the component
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
	// const job = { id, title: `Job Title ${id}` };

	// return {
	// 	props: {
	// 		job,
	// 	},
	// };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
// 	const { id } = context.params!; // Extract ID from route parameters

// 	try {
// 		// Fetch job details from API
// 		const response = await axios.post(
// 			`https://rosybrown-spider-442940.hostingersite.com/api/jobs/getJobById/${id}`
// 		);
// 		console.log(response);
// 		const job = response.data;

// 		// Check if the job exists
// 		if (!response) {
// 			return { notFound: true };
// 		}

// 		return {
// 			props: {
// 				job, // Pass job data as a prop to the component
// 			},
// 		};
// 	} catch (error) {
// 		return {
// 			notFound: true,
// 		};
// 	}
// };

export default Page;
