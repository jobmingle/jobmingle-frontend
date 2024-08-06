import styled from "styled-components";

export const Wrapper = styled.div`
	.container {
		padding: 1rem 4rem;
		display: flex;
		justify-content: space-between;
		width: 100vw;
		height: 100vh;

		&__txt {
			width: 55%;
			display: flex;
			gap: 1.7rem;
			flex-direction: column;
			justify-content: end;

			&-head {
				font-weight: 600;
				font-size: 3.3rem;
				width: 25rem;
				line-height: 1.1;
			}
			&-sub {
				width: 30rem;
				font-size: 1.1rem;
				line-height: 1.4;
				font-weight: 400;
			}
		}
		&__img {
			height: 100%;
			width: 50%;
			display: flex;
			justify-self: end;

			.image {
				width: 100%;
				height: 100%;
			}
		}
		&__form {
			display: flex;
			flex-direction: column;
			gap: 1.2rem;
			width: 25rem;

			&-inputBox {
				display: flex;
				width: 100%;
				gap: 1.2rem;

				input {
					height: 2.8rem;
					padding: 1rem 1rem 1rem 1.7rem;
					font-size: 1rem;
					background: gainsboro;
					outline: none;
					color: black;
				}
				.input-1 {
					width: 65%;
				}
				.input-2 {
					width: 35%;
				}
			}

			&--btn {
				height: 3rem;
				width: 100%;
				background: black;
				color: white;
			}
		}

		@media (max-width: 992px) {
			flex-direction: column;

			&__txt {
				width: 100%;
			}
			&__img {
				width: 100%;
			}
		}
	}
`;
