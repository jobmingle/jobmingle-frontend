import Button from "@/app/_components/atoms/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface modalprops {
	IsOpen: boolean;
	setIsOpen: any;
	answers: any;
}
const CareerResultModal: React.FC<modalprops> = ({
	IsOpen,
	setIsOpen,
	answers,
}) => {
	const router = useRouter();

	const closeModal = () => {
		setIsOpen(false);
		router.push("/jobs");
	};
	console.log(answers && answers);
	// const main = answers.foreach()
	return (
		<div>
			{IsOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div
						className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
						onClick={closeModal}
					></div>
					<div className="bg-white rounded-lg p-4 md:p-8 z-50 w-[90%] max-w-2xl max-h-[90vh] overflow-auto shadow-lg sora">
						<h2 className="text-xl md:text-2xl font-bold mb-4">
							Hello Jobmingler,{" "}
						</h2>
						<p>
							We&#39;ve analyzed your answers and scored them against our course
							criteria. <br />
							Our results show that this course is an exceptional match for you,
							with a high score indicating strong potential for success. <br />
							Click the link below to learn more about the course and get
							started immediately!!!.
						</p>
						{/* {}(`Top category/categories:\n${topCategoryString}`); */}
						{/* {answers} */}
						<div className="mt-4 text-sm md:text-base flex gap-2">
							for further questions,{" "}
							<p>
								email us here:{" "}
								<a
									href="mailto:contact@jobmingle.co"
									target="blank"
									className="text-yellow-400 pl-2"
								>
									contact@jobmingle.co
								</a>
							</p>
						</div>
						<p>
							<strong className="block"> Best Regards,</strong>
							Jobmingle Team.
						</p>
						<p className="font-semibold">
							P.S. In some cases, 2-3 courses may be recommended if they score
							the same high points.
						</p>
						{/*  */}
						<p>Recommended Course(s)</p>

						<Link
							href={""}
							dangerouslySetInnerHTML={{ __html: answers }}
							className="text-yellow-400"
						/>

						{/*  */}
						<div className="mt-4 flex justify-center">
							<Button
								onClick={closeModal}
								className="w-[100px] rounded-lg text-white border-none bg-[#f5cb1a]"
							>
								Close
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CareerResultModal;
