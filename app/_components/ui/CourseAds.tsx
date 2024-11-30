import Button from "../atoms/Button";

type ModalStateProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function CourseAds({ setIsOpen, isOpen }: ModalStateProps) {
	const closeCvModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			{isOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div
						className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
						onClick={closeCvModal}
					></div>

					<div className="bg-white rounded-lg p-4 md:p-8 z-50 w-[90%] max-w-2xl max-h-[90vh] overflow-auto shadow-lg">
						<h2 className="text-xl md:text-2xl font-bold mb-4">
							{" "}
							Full details
						</h2>
						<ul className="text-left sora list-disc space-y-5">
							<li>
								Access to a free ATS-Compliant CV after the completion of your
								course.
							</li>
							<li>
								Access to one of the most sought after blueprint for jobseekers
								called: The 13 Interview Questions Every JobSeekers Must Know to
								Stand Out & Get Hired!
							</li>
							<li>
								Access to the JobMingle Accountability Pair Program (JAPP) to
								help you stay on track and motivate your success.
							</li>
							<li>
								Access to a FREE certificate after the completion of your
								course.
							</li>
							<li>
								Access to an exclusive support community led by expert course
								creators to ask questions and get guidance.
							</li>
						</ul>
						<div className="mt-4 flex justify-center">
							<Button
								onClick={closeCvModal}
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
}
