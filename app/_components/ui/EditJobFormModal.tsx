import { BsXLg } from "react-icons/bs";
import EditJobForm from "./EditJobForm";

interface EditJobFormModalProps {
	setActive: (active: boolean) => void;
	jobId: any;
}

const EditJobFormModal: React.FC<EditJobFormModalProps> = ({
	setActive,
	jobId,
}) => {
	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			setActive(false);
		}
	};

	return (
		<div
			className="fixed inset-0 bg-stone-200 bg-opacity-30 flex justify-center items-center z-50 overflow-y-auto"
			onClick={handleOverlayClick}
		>
			<div className="relative bg-white rounded-md shadow-lg w-full max-w-2xl mx-4 md:p-6 overflow-y-auto max-h-[90vh]">
				{/* Close Button */}
				<button
					className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
					onClick={() => setActive(false)}
				>
					<BsXLg size={20} />
				</button>

				{/* Modal Content */}
				<main>
					<EditJobForm jobId={jobId} />
				</main>
			</div>
		</div>
	);
};

export default EditJobFormModal;
