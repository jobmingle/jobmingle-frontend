import React, { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { Content, PopupContainer, Overlay } from "./styles";

const Jobs = () => {
	//   const { isLoggedIn } = useAuth();
	const [showPopup, setShowPopup] = useState(false);

	//   const handleApplyClick = () => {
	//     if (isLoggedIn) {
	//       setShowPopup(true);
	//     } else {
	//       alert("Please log in to apply.");
	//     }
	//   };
	const handleApplyClick = () => {
		setShowPopup(true);
	};
	const handleClosePopup = () => {
		setShowPopup(false);
	};

	return (
		<Content>
			{/* <div className="head">
				<h1 className="head__big">Featured Jobs</h1>
				<p className="head__small">
					Know your worth and find a job that qualify your life
				</p>
			</div> */}
			<div className="box">
				<div className="card">
					<div className="head">
						<div className="logo">
							<Image
								alt="jobmingle"
								src="/image/logo.png"
								width={90}
								height={90}
								className="image"
							/>
						</div>
						<div className="txt">
							<h2 className="big">JobMingle</h2>
							<p className="small">Full-time</p>
						</div>
					</div>
					<div className="txt-1">
						<h2 className="big-1">Senior Software Engineer</h2>
						<p className="small">Lagos, NG</p>
					</div>
					<div className="txt-2">
						<h2 className="big-1">Pay:</h2>
						<p className="small">12,000 - 150,000</p>
					</div>
					<div className="txt-3">
						<p className="small">3 days ago</p>
						<button className="btn" onClick={handleApplyClick}>
							View Job
						</button>
					</div>
				</div>
				<div className="card">
					<div className="head">
						<div className="logo">
							<Image
								alt="jobmingle"
								src="/image/logo.png"
								width={90}
								height={90}
								className="image"
							/>
						</div>
						<div className="txt">
							<h2 className="big">JobMingle</h2>
							<p className="small">Full-time</p>
						</div>
					</div>
					<div className="txt-1">
						<h2 className="big-1">Senior Software Engineer</h2>
						<p className="small">Lagos, NG</p>
					</div>
					<div className="txt-2">
						<h2 className="big-1">Pay:</h2>
						<p className="small">12,000 - 150,000</p>
					</div>
					<div className="txt-3">
						<p className="small">3 days ago</p>
						<button className="btn" onClick={handleApplyClick}>
							View Job
						</button>
					</div>
				</div>
				<div className="card">
					<div className="head">
						<div className="logo">
							<Image
								alt="jobmingle"
								src="/image/logo.png"
								width={90}
								height={90}
								className="image"
							/>
						</div>
						<div className="txt">
							<h2 className="big">JobMingle</h2>
							<p className="small">Full-time</p>
						</div>
					</div>
					<div className="txt-1">
						<h2 className="big-1">Senior Software Engineer</h2>
						<p className="small">Lagos, NG</p>
					</div>
					<div className="txt-2">
						<h2 className="big-1">Pay:</h2>
						<p className="small">12,000 - 150,000</p>
					</div>
					<div className="txt-3">
						<p className="small">3 days ago</p>
						<button className="btn" onClick={handleApplyClick}>
							View Job
						</button>
					</div>
				</div>
				<div className="card">
					<div className="head">
						<div className="logo">
							<Image
								alt="jobmingle"
								src="/image/logo.png"
								width={90}
								height={90}
								className="image"
							/>
						</div>
						<div className="txt">
							<h2 className="big">JobMingle</h2>
							<p className="small">Full-time</p>
						</div>
					</div>
					<div className="txt-1">
						<h2 className="big-1">Senior Software Engineer</h2>
						<p className="small">Lagos, NG</p>
					</div>
					<div className="txt-2">
						<h2 className="big-1">Pay:</h2>
						<p className="small">12,000 - 150,000</p>
					</div>
					<div className="txt-3">
						<p className="small">3 days ago</p>
						<button className="btn" onClick={handleApplyClick}>
							View Job
						</button>
					</div>
				</div>
				<div className="card">
					<div className="head">
						<div className="logo">
							<Image
								alt="jobmingle"
								src="/image/logo.png"
								width={90}
								height={90}
								className="image"
							/>
						</div>
						<div className="txt">
							<h2 className="big">JobMingle</h2>
							<p className="small">Full-time</p>
						</div>
					</div>
					<div className="txt-1">
						<h2 className="big-1">Senior Software Engineer</h2>
						<p className="small">Lagos, NG</p>
					</div>
					<div className="txt-2">
						<h2 className="big-1">Pay:</h2>
						<p className="small">12,000 - 150,000</p>
					</div>
					<div className="txt-3">
						<p className="small">3 days ago</p>
						<button className="btn" onClick={handleApplyClick}>
							View Job
						</button>
					</div>
				</div>
				<div className="card">
					<div className="head">
						<div className="logo">
							<Image
								alt="jobmingle"
								src="/image/logo.png"
								width={90}
								height={90}
								className="image"
							/>
						</div>
						<div className="txt">
							<h2 className="big">JobMingle</h2>
							<p className="small">Full-time</p>
						</div>
					</div>
					<div className="txt-1">
						<h2 className="big-1">Senior Software Engineer</h2>
						<p className="small">Lagos, NG</p>
					</div>
					<div className="txt-2">
						<h2 className="big-1">Pay:</h2>
						<p className="small">12,000 - 150,000</p>
					</div>
					<div className="txt-3">
						<p className="small">3 days ago</p>
						<button className="btn" onClick={handleApplyClick}>
							View Job
						</button>
					</div>
				</div>
				{showPopup && (
					<>
						<Overlay onClick={handleClosePopup} />
						<PopupContainer>
							<button onClick={handleClosePopup} className="close">
								<IoClose />
							</button>
							{/* <h2>Apply for {job.jobTitle}</h2>
              <p>Company: {job.companyName}</p>
              <p>Location: {job.location}</p> */}
							<h2>Apply for :Senior Software Engineer</h2>
							<p>Company: JobMingle</p>
							<p>Location: Lagos, NG</p>
						</PopupContainer>
					</>
				)}
			</div>
		</Content>
	);
};

export default Jobs;
