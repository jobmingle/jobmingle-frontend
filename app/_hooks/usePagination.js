import { useSearchParams } from "next/navigation";

const PAGE_SIZE = process.env.NEXT_PUBLIC_PAGE_SIZE;

export function usePagination() {
	const searchParams = useSearchParams();
	// const count = CoursesList.length;

	const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
	// console.log(PAGE_SIZE);
	// const pageCount = Math.ceil(count / PAGE_SIZE);
	const from = Number(page - 1) * Number(PAGE_SIZE);
	const to = from + Number(PAGE_SIZE);

	return { from, to };
}
