import CourseDetails from "@/app/_components/course/Course";

interface CoursePageProps {
	params: {
		id: string;
	};
}

export default function CoursePage({ params }: CoursePageProps) {
	console.log(params);
	return (
		<div>
			<CourseDetails params={params} />
		</div>
	);
}
