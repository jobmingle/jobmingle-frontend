"use client";
import Button from "@/app/_components/atoms/Button";
import React, { useState } from "react";
import CareerResultModal from "./components/CareerResultModal";

//
type Answer = string; // Since each answer is a string of comma-separated values
type Answers = Answer[];
function Page() {
	const [answers, setAnswers] = useState<Answers>([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
	]);
	const [AnswerCount, setAnswerCount] = useState({});
	const [IsOpen, setIsOpen] = useState(false);
	const handleChange = (event: any) => {
		const { name, value } = event.target;

		// Map and update answers array
		const updatedAnswers = [...answers];
		updatedAnswers[parseInt(name)] = value;
		setAnswers(updatedAnswers);
	};
	const handleSubmit = (event: any) => {
		event.preventDefault();
		console.log("Selected Answers:", answers);

		// counting the frequency
		const categoryCounts = answers.reduce((acc: any, answer: string) => {
			// Split the answer string by commas and count each category
			const categories = answer.split(",");
			categories.forEach((category: string) => {
				if (category) {
					acc[category.trim()] = acc[category.trim()]
						? acc[category.trim()] + 1
						: 1;
				}
			});
			return acc;
		}, {});
		console.log("Category Counts:", categoryCounts);

		const sortedCategories = Object.entries(categoryCounts).sort(
			(a: any, b: any) => b[1] - a[1]
		); // Sorting in descending order based on count

		// Get the highest count
		const highestCount = sortedCategories[0][1];

		// Find all categories that have the highest count
		const topCategories = sortedCategories.filter(
			([_, count]) => count === highestCount
		);

		// Alert the top category or categories with the highest counts
		if (topCategories.length > 0) {
			const topCategoryString = topCategories
				.map(([category]) => `${category}`)
				.join("</br>");
			// alert(`Top category/categories:\n${topCategoryString}`);
			setAnswerCount(`\n${topCategoryString}\n`);
		}
		setIsOpen(true);

		if (!answers) return;
	};

	const styles = {
		input: "accent-yellow-400",
		label: "flex flex-row gap-2 w-auto",
		question: "font-bold text-lg",
	};
	return (
		<div className="min-h-[100vh] py-4">
			<main className="max-w-[60rem] m-auto border">
				<CareerResultModal
					IsOpen={IsOpen}
					setIsOpen={setIsOpen}
					answers={AnswerCount}
				/>{" "}
				<section className="px-2">
					<h1 className="text-yellow-400 text-3xl md:text-4xl capitalize montserrat font-bold text-center mt-4">
						Jobmingle Career guide questions{" "}
					</h1>
					<p className="sora text-sm max-w-[40rem]- m-auto- text-center py-3">
						Complete this set of questions to find out the best skill for you to
						learn based on your interests and strengths. Once you submit the
						form, you’ll receive instant feedback on the course that matches
						your career goals.
					</p>
				</section>
				<br />
				<form
					onSubmit={handleSubmit}
					className="flex flex-col space-y-10 sora pl-2 md:pl-10"
				>
					{/* Question 1 */}
					<div className="question flex flex-col gap-3">
						<p className={styles.question}>
							Question 1: Which of these activities do you enjoy the most?
						</p>
						<label className={styles.label}>
							<input
								type="radio"
								name="0"
								value="Software_Development, Cybersecurity, Data_Analytics"
								className={styles.input}
								checked={
									answers[0] ===
									"Software_Development, Cybersecurity, Data_Analytics"
								}
								onChange={handleChange}
							/>
							Solving complex problems
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="0"
								value="Customer_Care_Service, Virtual_Assistant, Project_Management, Human_Resources"
								className={styles.input}
								checked={
									answers[0] ===
									"Customer_Care_Service, Virtual_Assistant, Project_Management, Human_Resources"
								}
								onChange={handleChange}
							/>
							Helping others
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="0"
								value="Graphic_Design, Product_Designing, Video_Editing, Copywriting"
								className={styles.input}
								checked={
									answers[0] ===
									"Graphic_Design, Product_Designing, Video_Editing, Copywriting"
								}
								onChange={handleChange}
							/>
							Creating or designing things
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="0"
								value="Data_Analytics, SEO_Writing, Google_&_YouTube Advertising, Facebook_Advertising"
								className={styles.input}
								checked={
									answers[0] ===
									"Data_Analytics, SEO_Writing, Google_&_YouTube Advertising, Facebook_Advertising"
								}
								onChange={handleChange}
							/>
							Analyzing data and information
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="0"
								value="Project_Management, Social_Media_Management, Virtual_Assistant, Human_Resources"
								className={styles.input}
								checked={
									answers[0] ===
									"Project_Management, Social_Media_Management, Virtual_Assistant, Human_Resources"
								}
								onChange={handleChange}
							/>
							Leading and organizing people
						</label>
					</div>
					{/* question2 */}
					<div className="question flex flex-col gap-3">
						<p className={styles.question}>
							Question 2: In a group project, which role do you naturally
							gravitate towards?
						</p>
						<label className={styles.label}>
							<input
								type="radio"
								name="1"
								value="Copywriting, Product_Designing, Video_Editing, Software_Development"
								className={styles.input}
								checked={
									answers[1] ===
									"Copywriting, Product_Designing, Video_Editing, Software_Development"
								}
								onChange={handleChange}
							/>
							The idea generator
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="1"
								value="Project_Management, Virtual_Assistant, Customer_Care_Service, Human_Resources"
								className={styles.input}
								checked={
									answers[1] ===
									"Project_Management, Virtual_Assistant, Customer_Care_Service, Human_Resources"
								}
								onChange={handleChange}
							/>
							The organizer
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="1"
								value="Data_Analytics, SEO_Writing, Cybersecurity, Copywriting"
								className={styles.input}
								checked={
									answers[1] ===
									"Data_Analytics, SEO_Writing, Cybersecurity, Copywriting"
								}
								onChange={handleChange}
							/>
							The researcher
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="1"
								value="Social_Media_Management, Google_&_YouTube Advertising, Facebook_Advertising, Human_Resources"
								className={styles.input}
								checked={
									answers[1] ===
									"Social_Media_Management, Google_&_YouTube Advertising, Facebook_Advertising, Human_Resources"
								}
								onChange={handleChange}
							/>
							The presenter
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="1"
								value="Project_Management, Customer_Care_Service, Virtual_Assistant, Human_Resources"
								className={styles.input}
								checked={
									answers[1] ===
									"Project_Management, Customer_Care_Service, Virtual_Assistant, Human_Resources"
								}
								onChange={handleChange}
							/>
							The mediator
						</label>
					</div>
					{/* question3 */}
					<div className="question flex flex-col gap-3">
						<p className={styles.question}>
							Question 3: Which work environment appeals to you the most?
						</p>
						<label className={styles.label}>
							<input
								type="radio"
								name="2"
								value="Social_Media_Management, Project_Management, Google_&_YouTube_Advertising, Facebook_Advertising"
								className={styles.input}
								checked={
									answers[2] ===
									"Social_Media_Management, Project_Management, Google_&_YouTube_Advertising, Facebook_Advertising"
								}
								onChange={handleChange}
							/>
							A fast-paced, high-pressure setting
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="2"
								value="Virtual_Assistant, Customer_Care_Service, Project_Management, Human_Resources"
								className={styles.input}
								checked={
									answers[2] ===
									"Virtual_Assistant, Customer_Care_Service, Project_Management, Human_Resources"
								}
								onChange={handleChange}
							/>
							A structured, predictable environment
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="2"
								value="Graphic_Design, Product_Designing, Video_Editing, Copywriting"
								className={styles.input}
								checked={
									answers[2] ===
									"Graphic_Design, Product_Designing, Video_Editing, Copywriting"
								}
								onChange={handleChange}
							/>
							A creative, flexible workspace
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="2"
								value="Social_Media_Management, Google_&_YouTube_Advertising, Facebook_Advertising"
								className={styles.input}
								checked={
									answers[2] ===
									"Social_Media_Management, Google_&_YouTube_Advertising, Facebook_Advertising"
								}
								onChange={handleChange}
							/>
							An outdoor or travel-heavy job
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="2"
								value="Project_Management, Virtual_Assistant, Data_Analytics, Human_Resources"
								className={styles.input}
								checked={
									answers[2] ===
									"Project_Management, Virtual_Assistant, Data_Analytics, Human_Resources"
								}
								onChange={handleChange}
							/>
							A collaborative, team-oriented atmosphere
						</label>
					</div>
					{/* question4 */}
					<div className="question flex flex-col gap-3">
						<p className={styles.question}>
							Question 4: What&#39;s most important to you in a career?
						</p>
						<label className={styles.label}>
							<input
								type="radio"
								name="3"
								value="Software_Development, Data_Analytics, Cybersecurity, Facebook_Advertising"
								className={styles.input}
								checked={
									answers[3] ===
									"Software_Development, Data_Analytics, Cybersecurity, Facebook_Advertising"
								}
								onChange={handleChange}
							/>
							High earning potential
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="3"
								value="Virtual_Assistant, Customer_Care_Service, Project_Management, Copywriting"
								className={styles.input}
								checked={
									answers[3] ===
									"Virtual_Assistant, Customer_Care_Service, Project_Management, Copywriting"
								}
								onChange={handleChange}
							/>
							Work-life balance
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="3"
								value="Customer_Care_Service, Copywriting, Project_Management, Human_Resources"
								className={styles.input}
								checked={
									answers[3] ===
									"Customer_Care_Service, Copywriting, Project_Management, Human_Resources"
								}
								onChange={handleChange}
							/>
							Making a positive impact on society
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="3"
								value="Software_Development, Social_Media_Management, Data_Analytics, Human_Resources"
								className={styles.input}
								checked={
									answers[3] ===
									"Software_Development, Social_Media_Management, Data_Analytics, Human_Resources"
								}
								onChange={handleChange}
							/>
							Opportunities for advancement
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="3"
								value="Cybersecurity, Software_Development, SEO_Writing, Data_Analytics"
								className={styles.input}
								checked={
									answers[3] ===
									"Cybersecurity, Software_Development, SEO_Writing, Data_Analytics"
								}
								onChange={handleChange}
							/>
							Continuous learning and growth
						</label>
					</div>
					{/* question5 */}
					<div className="question flex flex-col gap-3">
						<p className={styles.question}>
							{" "}
							Question 5: Which school subject did you enjoy the most?
						</p>
						<label className={styles.label}>
							<input
								type="radio"
								name="4"
								value="Data_Analytics, Software_Development, Cybersecurity, Facebook_Advertising"
								className={styles.input}
								checked={
									answers[4] ===
									"Data_Analytics, Software_Development, Cybersecurity, Facebook_Advertising"
								}
								onChange={handleChange}
							/>
							Mathematics
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="4"
								value="Cybersecurity, Software_Development, Data_Analytics"
								className={styles.input}
								checked={
									answers[4] ===
									"Cybersecurity, Software_Development, Data_Analytics"
								}
								onChange={handleChange}
							/>
							Sciences
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="4"
								value="Copywriting, SEO_Writing, Social_Media_Management"
								className={styles.input}
								checked={
									answers[4] ===
									"Copywriting, SEO_Writing, Social_Media_Management"
								}
								onChange={handleChange}
							/>
							Languages and Literature
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="4"
								value="Graphic_Design, Video_Editing, Product_Designing, Copywriting"
								className={styles.input}
								checked={
									answers[4] ===
									"Graphic_Design, Video_Editing, Product_Designing, Copywriting"
								}
								onChange={handleChange}
							/>
							Art or Music
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="4"
								value="Project_Management, Customer_Care_Service, Virtual_Assistant, Human_Resources"
								className={styles.input}
								checked={
									answers[4] ===
									"Project_Management, Customer_Care_Service, Virtual_Assistant, Human_Resources"
								}
								onChange={handleChange}
							/>
							Social Studies or History
						</label>
					</div>
					{/* question6 */}
					<div className="question flex flex-col gap-3">
						<p className={styles.question}>
							Question 6: How do you prefer to communicate with others?
						</p>
						<label className={styles.label}>
							<input
								type="radio"
								name="5"
								value="Copywriting, SEO_Writing, Virtual_Assistant, Human_Resources"
								className={styles.input}
								checked={
									answers[5] ===
									"Copywriting, SEO_Writing, Virtual_Assistant, Human_Resources"
								}
								onChange={handleChange}
							/>
							In writing (emails, reports)
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="5"
								value="Customer_Care_Service, Project_Management, Virtual_Assistant, Human_Resources"
								className={styles.input}
								checked={
									answers[5] ===
									"Customer_Care_Service, Project_Management, Virtual_Assistant, Human_Resources"
								}
								onChange={handleChange}
							/>
							One-on-one conversations
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="5"
								value="Social_Media_Management, Google_&_YouTube_Advertising, Facebook_Advertising"
								className={styles.input}
								checked={
									answers[5] ===
									"Social_Media_Management, Google_&_YouTube_Advertising, Facebook_Advertising"
								}
								onChange={handleChange}
							/>
							Public speaking or presentations
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="5"
								value="Graphic_Design, Video_Editing, Product_Designing, Data_Analytics"
								className={styles.input}
								checked={
									answers[5] ===
									"Graphic_Design, Video_Editing, Product_Designing, Data_Analytics"
								}
								onChange={handleChange}
							/>
							Through visuals (graphs, designs)
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="5"
								value="SEO_Writing, Social_Media_Management, Google_&_YouTube_Advertising, Human_Resources"
								className={styles.input}
								checked={
									answers[5] ===
									"SEO_Writing, Social_Media_Management, Google_&_YouTube_Advertising, Human_Resources"
								}
								onChange={handleChange}
							/>
							By demonstrating or teaching
						</label>
					</div>
					{/* question7 */}
					<div className="question flex flex-col gap-3">
						<p className={styles.question}>
							{" "}
							Question 7: What type of problems do you enjoy solving?
						</p>
						<label className={styles.label}>
							<input
								type="radio"
								name="6"
								value="Software_Development, Cybersecurity, Data_Analytics, Product_Designing"
								className={styles.input}
								checked={
									answers[6] ===
									"Software_Development, Cybersecurity, Data_Analytics, Product_Designing"
								}
								onChange={handleChange}
							/>
							Technical or mechanical issues
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="6"
								value="Customer_Care_Service, Virtual_Assistant, Project_Management, Human_Resources"
								className={styles.input}
								checked={
									answers[6] ===
									"Customer_Care_Service, Virtual_Assistant, Project_Management, Human_Resources"
								}
								onChange={handleChange}
							/>
							Social or interpersonal conflicts
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="6"
								value="Graphic_Design, Video_Editing, Product_Designing, Copywriting"
								className={styles.input}
								checked={
									answers[6] ===
									"Graphic_Design, Video_Editing, Product_Designing, Copywriting"
								}
								onChange={handleChange}
							/>
							Creative challenges
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="6"
								value="Data_Analytics, Cybersecurity, SEO_Writing, Software_Development"
								className={styles.input}
								checked={
									answers[6] ===
									"Data_Analytics, Cybersecurity, SEO_Writing, Software_Development"
								}
								onChange={handleChange}
							/>
							Logical or analytical puzzles
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="6"
								value="Project_Management, Virtual_Assistant, Social_Media_Management, Human_Resources"
								className={styles.input}
								checked={
									answers[6] ===
									"Project_Management, Virtual_Assistant, Social_Media_Management, Human_Resources"
								}
								onChange={handleChange}
							/>
							Organizational or efficiency problems
						</label>
					</div>
					{/* question8 */}
					<div className="question flex flex-col gap-3">
						<p className={styles.question}>
							Question 8: Which of these skills do you feel you excel at? ?
						</p>
						<label className={styles.label}>
							<input
								type="radio"
								name="7"
								value="Cybersecurity, Software_Development, Data_Analytics, Product_Designing"
								className={styles.input}
								checked={
									answers[7] ===
									"Cybersecurity, Software_Development, Data_Analytics, Product_Designing"
								}
								onChange={handleChange}
							/>
							Critical thinking
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="7"
								value="Customer_Care_Service, Project_Management, Virtual_Assistant, Human_Resources"
								className={styles.input}
								checked={
									answers[7] ===
									"Customer_Care_Service, Project_Management, Virtual_Assistant, Human_Resources"
								}
								onChange={handleChange}
							/>
							Empathy and understanding others
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="7"
								value="Graphic_Design, Product_Designing, Video_Editing, Copywriting"
								className={styles.input}
								checked={
									answers[7] ===
									"Graphic_Design, Product_Designing, Video_Editing, Copywriting"
								}
								onChange={handleChange}
							/>
							Creativity and innovation
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="7"
								value="SEO_Writing, Data_Analytics, Copywriting, Software_Development"
								className={styles.input}
								checked={
									answers[7] ===
									"SEO_Writing, Data_Analytics, Copywriting, Software_Development"
								}
								onChange={handleChange}
							/>
							Attention to detail
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="7"
								value="Project_Management, Social Media_Management, Virtual_Assistant, Human_Resources"
								className={styles.input}
								checked={
									answers[7] ===
									"Project_Management, Social Media_Management, Virtual_Assistant, Human_Resources"
								}
								onChange={handleChange}
							/>
							Strategic planning
						</label>
					</div>
					{/* question9 */}
					<div className="question flex flex-col gap-3">
						<p className={styles.question}>
							Question 9: In 10 years, where do you see yourself?
						</p>
						<label className={styles.label}>
							<input
								type="radio"
								name="8"
								value="Social_Media_Management, Project_Management, SEO_Writing, Copywriting"
								className={styles.input}
								checked={
									answers[8] ===
									"Social_Media_Management, Project_Management, SEO_Writing, Copywriting"
								}
								onChange={handleChange}
							/>
							Running my own business
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="8"
								value="Project_Management, Data_Analytics, Software_Development, Human_Resources"
								className={styles.input}
								checked={
									answers[8] ===
									"Project_Management, Data_Analytics, Software_Development, Human_Resources"
								}
								onChange={handleChange}
							/>
							In a leadership position at a large company
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="8"
								value="Customer_Care_Service, Virtual_Assistant, Copywriting, Human_Resources"
								className={styles.input}
								checked={
									answers[8] ===
									"Customer_Care_Service, Virtual_Assistant, Copywriting, Human_Resources"
								}
								onChange={handleChange}
							/>
							Making a difference in my community
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="8"
								value="Cybersecurity, Data_Analytics, Software_Development, Product_Designing"
								className={styles.input}
								checked={
									answers[8] ===
									"Cybersecurity, Data_Analytics, Software_Development, Product_Designing"
								}
								onChange={handleChange}
							/>
							Recognized as an expert in my field
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="8"
								value="Virtual_Assistant, Graphic_Design, Video_Editing, Copywriting"
								className={styles.input}
								checked={
									answers[8] ===
									"Virtual_Assistant, Graphic_Design, Video_Editing, Copywriting"
								}
								onChange={handleChange}
							/>
							Balancing a successful career with personal pursuits
						</label>
					</div>
					{/* question10 */}
					<div className="question flex flex-col gap-3">
						<p className={styles.question}>
							Question 10: Which of these words best describes you?
						</p>
						<label className={styles.label}>
							<input
								type="radio"
								name="9"
								value="Project_Management, Social_Media_Management, Google_&_YouTube_Advertising, Software_Development"
								className={styles.input}
								checked={
									answers[9] ===
									"Project_Management, Social_Media_Management, Google_&_YouTube_Advertising, Software_Development"
								}
								onChange={handleChange}
							/>
							Ambitious
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="9"
								value="Customer_Care_Service, Virtual_Assistant, Project_Management, Human_Resources"
								className={styles.input}
								checked={
									answers[9] ===
									"Customer_Care_Service, Virtual_Assistant, Project_Management, Human_Resources"
								}
								onChange={handleChange}
							/>
							Compassionate
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="9"
								value="Graphic_Design, Product_Designing, Video_Editing, Copywriting"
								className={styles.input}
								checked={
									answers[9] ===
									"Graphic_Design, Product_Designing, Video_Editing, Copywriting"
								}
								onChange={handleChange}
							/>
							Innovative
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="9"
								value="Data_Analytics, Software_Development, Cybersecurity, SEO_Writing"
								className={styles.input}
								checked={
									answers[9] ===
									"Data_Analytics, Software_Development, Cybersecurity, SEO_Writing"
								}
								onChange={handleChange}
							/>
							Analytical
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="9"
								value="Virtual_Assistant, Social_Media_Management, SEO_Writing, Human_Resources"
								className={styles.input}
								checked={
									answers[9] ===
									"Virtual_Assistant, Social_Media_Management, SEO_Writing, Human_Resources"
								}
								onChange={handleChange}
							/>
							Adaptable
						</label>
					</div>
					{/* question11 */}
					<div className="question flex flex-col gap-3">
						<p className={styles.question}>
							Question 11: What kind of feedback do you prefer from supervisors?
						</p>
						<label className={styles.label}>
							<input
								type="radio"
								name="10"
								value="Software_Development, Data_Analytics, Cybersecurity, Product_Designing"
								className={styles.input}
								checked={
									answers[10] ===
									"Software_Development, Data_Analytics, Cybersecurity, Product_Designing"
								}
								onChange={handleChange}
							/>
							Direct and straightforward
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="10"
								value="Customer_Care_Service, Virtual_Assistant, Project_Management, Human_Resources"
								className={styles.input}
								checked={
									answers[10] ===
									"Customer_Care_Service, Virtual_Assistant, Project_Management, Human_Resources"
								}
								onChange={handleChange}
							/>
							Supportive and encouraging
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="10"
								value="SEO_Writing, Graphic_Design, Copywriting, Data_Analytics"
								className={styles.input}
								checked={
									answers[10] ===
									"SEO_Writing, Graphic_Design, Copywriting, Data_Analytics"
								}
								onChange={handleChange}
							/>
							Detailed and specific
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="10"
								value="Social_Media_Management, Facebook_Advertising, Google_&_YouTube_Advertising, Project_Management"
								className={styles.input}
								checked={
									answers[10] ===
									"Social_Media_Management, Facebook_Advertising, Google_&_YouTube_Advertising, Project_Management"
								}
								onChange={handleChange}
							/>
							Focused on results and outcomes
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="10"
								value="Project_Management, Virtual_Assistant, Customer_Care_Service, Human_Resources"
								className={styles.input}
								checked={
									answers[10] ===
									"Project_Management, Virtual_Assistant, Customer_Care_Service, Human_Resources"
								}
								onChange={handleChange}
							/>
							Balanced between positives and areas for improvement
						</label>
					</div>
					{/* question12 */}
					<div className="question flex flex-col gap-3">
						<p className={styles.question}>
							Question 12: Which of these work styles suits you best?
						</p>
						<label className={styles.label}>
							<input
								type="radio"
								name="11"
								value="Software_Development, Virtual_Assistant, Copywriting, Data_Analytics"
								className={styles.input}
								checked={
									answers[11] ===
									"Software_Development, Virtual_Assistant, Copywriting, Data_Analytics"
								}
								onChange={handleChange}
							/>
							Working independently on focused tasks
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="11"
								value="Project_Management, Social_Media_Management, Customer_Care_Service, Human_Resources"
								className={styles.input}
								checked={
									answers[11] ===
									"Project_Management, Social_Media_Management, Customer_Care_Service, Human_Resources"
								}
								onChange={handleChange}
							/>
							Collaborating closely with a team
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="11"
								value="Virtual_Assistant, Social_Media_Management, Google_&_YouTube_Advertising, Product_Designing"
								className={styles.input}
								checked={
									answers[11] ===
									"Virtual_Assistant, Social_Media_Management, Google_&_YouTube_Advertising, Product_Designing"
								}
								onChange={handleChange}
							/>
							Multitasking on various projects
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="11"
								value="Customer_Care_Service, Virtual_Assistant, Project_Management, Human_Resources"
								className={styles.input}
								checked={
									answers[11] ===
									"Customer_Care_Service, Virtual_Assistant, Project_Management, Human_Resources"
								}
								onChange={handleChange}
							/>
							Following a set routine
						</label>
						<label className={styles.label}>
							<input
								type="radio"
								name="11"
								value="Project_Management, Social_Media_Management, Facebook_Advertising, Software_Development"
								className={styles.input}
								checked={
									answers[11] ===
									"Project_Management, Social_Media_Management, Facebook_Advertising, Software_Development"
								}
								onChange={handleChange}
							/>
							Adapting to changing priorities and deadlines
						</label>
					</div>
					<Button
						type="submit"
						className="border-none mt-8 bg-yellow-400 text-white sora text-md"
					>
						Submit
					</Button>
					<br />
				</form>
			</main>
			{/* <div dangerouslySetInnerHTML={{__html: AnswerCount}} /> */}
		</div>
	);
}

export default Page;
