import { useSearchParams, useRouter } from "next/navigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import styled from "styled-components";

const StyledPagination = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 568px) {
		flex-direction: column;
	}
`;

const P = styled.p`
	font-size: 1.4rem;
	margin-left: 0.8rem;

	& span {
		font-weight: 600;
	}
`;

const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.6rem;
`;

const PaginationButton = styled.button`
	background-color: ${(props) =>
		props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
	color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
	border: none;
	border-radius: var(--border-radius-sm);
	font-weight: 500;
	/* font-size: 1.4rem; */

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.4rem;
	padding: 0.6rem 1.2rem;
	transition: all 0.3s;

	&:has(span:last-child) {
		padding-left: 0.4rem;
	}

	&:has(span:first-child) {
		padding-right: 0.4rem;
	}

	& svg {
		height: 1.8rem;
		width: 1.8rem;
	}

	&:hover:not(:disabled) {
		background-color: var(--color-brand-600);
		color: var(--color-brand-50);
	}
`;

const PAGE_SIZE = process.env.NEXT_PUBLIC_PAGE_SIZE;

function Pagination({ count, assets = "results" }) {
	const searchParams = useSearchParams();
	const router = useRouter();

	const currentPage = searchParams.get("page")
		? Number(searchParams.get("page"))
		: 1;

	const pageCount = Math.ceil(count / PAGE_SIZE);

	function nextPage() {
		const next = currentPage === pageCount ? currentPage : currentPage + 1;

		const newParams = new URLSearchParams(searchParams);
		newParams.set("page", next);
		router.push(`?${newParams.toString()}`, { scroll: false });
	}

	function prevPage() {
		const prev = currentPage === 1 ? currentPage : currentPage - 1;

		const newParams = new URLSearchParams(searchParams);
		newParams.set("page", prev);
		router.push(`?${newParams.toString()}`, { scroll: false });
	}

	if (pageCount <= 1) return null;

	return (
		<div className=" md:flex md:justify-center md:p-[1.2rem] font-bold text-[1rem] max-md:text-[.75rem] ">
			<div>
				<Buttons>
					<PaginationButton onClick={prevPage} disabled={currentPage === 1}>
						<HiChevronLeft />
						<span>Prev</span>
					</PaginationButton>
					<p className="">
						<span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
						<span>
							{currentPage === pageCount ? count : currentPage * PAGE_SIZE}
						</span>{" "}
						of <span>{count}</span> {assets}
					</p>
					<PaginationButton
						onClick={nextPage}
						disabled={currentPage === pageCount}
					>
						<span>Next</span>
						<HiChevronRight />
					</PaginationButton>
				</Buttons>
			</div>
		</div>
	);
}

export default Pagination;
