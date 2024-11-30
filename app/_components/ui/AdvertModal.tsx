import Button from "../atoms/Button";

type ModalStateProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AdvertModal({ isOpen, setIsOpen }: ModalStateProps) {
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
						<h2 className="text-xl md:text-2xl font-bold mb-4">Our Packages</h2>
						<table className="w-full text-left border-collapse">
							<thead>
								<tr>
									<th className="border-b py-2 text-sm md:text-base">
										Package
									</th>
									<th className="border-b py-2 text-sm md:text-base">
										Details
									</th>
									<th className="border-b py-2 text-sm md:text-base">Price</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border-b py-2 text-sm md:text-base">
										Premium Package
									</td>
									<td className="border-b py-2 text-sm md:text-base">
										<ul className="list-disc ml-5">
											<li>ATS-optimized CV/Resume</li>
											<li>Personalized cover letter</li>
											<li>Keyword-optimised LinkedIn profile</li>
											<li>Professional portfolio website</li>
										</ul>
									</td>
									<td className="border-b py-2 text-sm md:text-base">
										NGN 40,000
									</td>
								</tr>
								<tr>
									<td className="border-b py-2 text-sm md:text-base">
										Standard Package
									</td>
									<td className="border-b py-2 text-sm md:text-base">
										<ul className="list-disc ml-5">
											<li>ATS-optimized CV/Resume</li>
											<li>Personalized cover letter</li>
											<li>Keyword-optimised LinkedIn profile</li>
										</ul>
									</td>
									<td className="border-b py-2 text-sm md:text-base">
										NGN 20,000
									</td>
								</tr>
								<tr>
									<td className="border-b py-2 text-sm md:text-base">
										Basic Package
									</td>
									<td className="border-b py-2 text-sm md:text-base">
										<ul className="list-disc ml-5">
											<li>ATS-optimized CV/Resume</li>
											<li>Personalized cover letter</li>
										</ul>
									</td>
									<td className="border-b py-2 text-sm md:text-base">
										NGN 10,000
									</td>
								</tr>
							</tbody>
						</table>
						<div className="mt-4 text-sm md:text-base">
							<strong>Account details:</strong>
							<p>2044112176</p>
							<p>JobMingle Nigeria</p>
							<p>FirstBank</p>
						</div>
						<div className="mt-4 text-sm md:text-base">
							<strong>WhatsApp us with proof of payment:</strong> 07077308481
						</div>
						<div className="mt-4 text-sm md:text-base">
							<strong>Want A Customized Service?</strong>
							<p>Please reach out to us via the following:</p>
							<p>Email: contact@jobmingle.co</p>
							<p>WhatsApp: 07077308481</p>
						</div>
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
