import styled from "styled-components";

export const Content = styled.div`
	padding: 2rem 3rem 3rem 3rem;

	@media (max-width: 568px) {
		padding: 0 1rem 1rem 1rem;
	}
	.head {
		display: flex;
		flex-direction: column;
		align-items: center;

		&__big {
			font-size: 1.8rem;
			font-weight: bold;
		}
		&__small {
			font-size: 1.2rem;
			color: black;
		}
	}

	.box {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		/* grid-template-rows: repeat(2, 1fr); */
		grid-row-gap: 1rem;
		grid-column-gap: 1rem;
		padding-top: 2rem;

		.card {
			border: 1px solid grey;
			width: 100%;
			/* width: 18rem; */
			height: auto;
			border-radius: 1rem;
			padding: 1rem;
			/* align-items: center; */
			justify-content: space-between;
			display: flex;
			flex-direction: column;
			cursor: pointer;

			.head {
				display: flex;
				gap: 1rem;
				border-bottom: 1px solid grey;
				padding: 1rem 0;
				flex-direction: row;
				/* height: 4rem; */

				.logo {
					height: 4rem;
					width: 4rem;
					border-radius: 100%;
					padding: 0.6rem;
					border: 1px solid gray;

					.image {
					}
				}
			}
			.txt {
				display: flex;
				flex-direction: column;
				gap: 0.1rem;

				.big {
					font-size: 1.6rem;
					font-weight: bold;
				}
			}
			.txt-1 {
				padding: 1rem 0;

				.big-1 {
					font-size: 1.1rem;
					font-weight: bold;
				}
			}
			.txt-2 {
				/* padding: 1rem 0; */
				display: flex;
				align-self: flex-start;
				padding: 1rem;
				gap: 2rem;
				width: 100%;

				.big-1 {
					font-size: 1.1rem;
					font-weight: bold;
				}
				.small {
					font-weight: 500;
				}
			}
			.txt-3 {
				padding: 1.2rem 0;
				display: flex;
				align-self: center;
				padding: 0 1rem;
				justify-content: center;
				width: 100%;

				.big-1 {
					font-size: 1.1rem;
					font-weight: bold;
				}
				.small {
					font-weight: 500;
				}

				.btn {
					color: black;
					border: 1px solid black;
					border-radius: 5px;
					padding: 0.4rem 1rem;
					transition: all 0.2s;

					&:hover {
						background: black;
						color: white;
					}
				}
			}
		}

		/* Medium  - small screens 1024 992,768*/
		@media (max-width: 992px) {
			grid-template-columns: repeat(2, 1fr);
		}

		/* Smaller screens */
		@media (max-width: 568px) {
			grid-template-columns: 1fr;
			padding-top: 1rem;
			justify-content: center;
			align-items: center;
		}
	}
`;
export const PopupContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	padding: 1.5rem;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	z-index: 1000;
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	.close {
		align-self: flex-end;
		margin-bottom: 1rem;
		padding: 0.1rem;
		border-radius: 100%;
		border: 1px solid black;
	}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 999;
`;
