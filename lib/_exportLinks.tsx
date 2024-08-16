import SlideImage1 from "@/public/scott-graham-OQMZwNd3ThU-unsplash.jpg";
import SlideImage2 from "@/public/scott-graham-5fNmWej4tAA-unsplash.jpg";
import SlideImage3 from "@/public/Pexels Photo by Christina Morillo.svg";
import Esgo from "@/public/founder,esgo.jpeg";
import Flolog from "@/public/flogog.jpeg";
import Marketer from "@/public/marketer.jpeg";
import AA from "@/public/Image2.jpeg";
import Benjamin from "@/public/video Editor.jpeg";
import KobieBrave from "@/public/kobi brave.jpeg";
import CEO from "@/public/ceo.jpeg";
import bb from "@/public/course image.png";

import CoFounder from "@/public/coFounder.jpeg";
import ProductDesigner from "@/public/productDesigner.jpeg";
import CTO from "@/public/CTO.jpeg";
import BrandDesigner from "@/public/graphicsdesigner.jpeg";
import TalentSync from "@/public/logo4.png";
import ImpressionHub from "@/public/logo3.jpeg";
import IncRemote from "@/public/LUSH.png";
import Raiz from "@/public/logo5.jpeg";
import Vent from "@/public/Photo from Omole.jpg";
import WhyUsImg1 from "@/public/why-us-1.jpg";
import WhyUsImg2 from "@/public/why-us-2.jpg";
import WhyUsImg3 from "@/public/why-us-3.jpg";
import WhyUsImg4 from "@/public/why-us-4.jpg";
import WhyUsImg5 from "@/public/why-us-5.jpg";
import WhyUsImg6 from "@/public/why-us-6.jpg";
import WhyUsImg7 from "@/public/why-us-7.jpg";
import WhyUsImg8 from "@/public/why-us-8.jpg";
import WhyUsImg9 from "@/public/why-us-9.jpg";

export const teamMembers = [
	{
		name: "Omole Usuangbon",
		role: "CEO",
		src: CEO,
	},
	{
		name: "Tejiri Omaduvie",
		role: "Product Designer",
		src: ProductDesigner,
	},
	{
		name: "Iwuanyanwu Anselm",
		role: "Backend Developer, CTO",
		src: CTO,
	},
	{
		name: "Princess Ikoko",
		role: "Brand/Graphic Designer",
		src: BrandDesigner,
	},
];
export const testimonials = [
	{
		IMG: Esgo,
		name: "Sarah Epia",
		role: " Founder Esogo",
		review:
			"I have worked with several recruitment companies in the past, but JobMingle stands out from the rest. Their team is professional, responsive, and truly cares about finding the right fit for our business. I highly recommend them for any recruitment needs.",
	},
	{
		IMG: Benjamin,
		name: "Benjamin Jerry",
		role: "Video Editor",
		review:
			" One of the best decisions I have made so far online is taking JobMingle's video editing mastery course. I learned many new things I didn't know before. And the support from the course creator has been massive. I wish I had started learning video editing with their course.",
	},
	{
		IMG: KobieBrave,
		name: "Kobie Brave",
		role: "Video Editor",
		review:
			"I'm so glad I joined the JobMingle community when I saw their invite link in a WhatsApp group I belonged to. If I hadn't, I wouldn't have landed my remote job as a video editor for an amazing company. Thank you, JobMingle",
	},

	{
		IMG: Flolog,
		name: "Dr. Andrew Akhabue",
		role: " Co-founder, Flolog",

		review:
			"JobMingle is more than a job platform. The seamlessness, supportive team, and quality of talents we got from the platform is simply top notch. I'd recommend it for its dependability. ",
	},

	{
		IMG: AA,
		name: "Oluwatobiloba A. A",
		role: "Developer",
		review:
			"I had been searching for a hybrid or remote job for months with nothing to show for it. But everything changed when I joined JobMingle. I was able to land a junior customer care role thanks to them. Right now, I look forward to upskilling on their platform for bigger opportunities..",
	},
	{
		// I

		IMG: Marketer,
		name: "Ajayi Temitayo",
		role: "Marketing manager",
		review:
			"All thanks to JobMingle was able to land a marketing manager position in a reputable company. I'm so happy about this because of the number of rejections I had before getting this job. Thank you so much JobMingle.",
	},
];
type FAQItemType = {
	question: string;
	answer: string;
};
export const faqItems: FAQItemType[] = [
	{
		question: "What is JobMingle?",
		answer:
			"JobMingle is an innovative ed-tech platform and remote job recruitment website. We empower individuals seeking to transition to a new career by equipping them with the right skills and providing access to numerous remote job opportunities across the country. We assist employers in finding the remote talent they desire to grow their company and connect job seekers to the jobs they need to succeed.",
	},
	{
		question: "Do I need a laptop before I can visit Jobmingle.co?",
		answer:
			"No! You can access Jobmingle.co on all smart devices. As long as your phone can browse, you are good to go.",
	},
	{
		question: "Is there a mobile app available for JobMingle?",
		answer:
			"No. But we are currently working on it. We will notify you when it is available for download on the Play Store and Apple Store.",
	},
	{
		question: "What kind of courses are available on JobMingle?",
		answer:
			"We offer a wide range of courses across multiple industries. Which means we are not specific to a particular industry.",
	},
	{
		question: "Is it only remote jobs that are listed on JobMingle?",
		answer:
			"Yes. However, we also list hybrid jobs that require you to go to work a few times a week.",
	},
	{
		question: "Can I advertise with JobMingle?",
		answer:
			"Yes, you can. To advertise your brand, please send an email to contact@jobmingle.co to learn more about our advertising rates.",
	},
];
export const courses = [
  {
    image: bb,
    title: "UI/UX Design Crash Course",
    instructor: "Kelvin User",
    price: "$20",
  },
  {
    image: bb,
    title: "Email Marketing",
    instructor: "Meck Zin",
    price: "$120",
  },
  // Add more course objects (total of 8)
  {
    image: bb,
    title: "JavaScript Basics",
    instructor: "Alex Doe",
    price: "$30",
  },
  {
    image: bb,
    title: "React for Beginners",
    instructor: "Jane Smith",
    price: "$45",
  },
  {
    image: bb,
    title: "Python Programming",
    instructor: "Sam Wilson",
    price: "$50",
  },
  {
    image: bb,
    title: "Data Analysis with Python",
    instructor: "Emily Davis",
    price: "$60",
  },
  {
    image: bb,
    title: "Machine Learning 101",
    instructor: "Michael Brown",
    price: "$70",
  },
  {
    image: bb,
    title: "Web Development Bootcamp",
    instructor: "Sarah Johnson",
    price: "$80",
  },
];
export const faqItemss: FAQItemType[] = [
	{
		question: "How will my documents get to me?",
		answer:
			"Your documents will be sent in PDF format to the email you'll provide us with",
	},
	{
		question: "How long will it take for my CV & cover letter to be ready?",
		answer: "2-4 days.",
	},
	{
		question: "How long will it take for my portfolio to be ready?",
		answer: "7-10 days.",
	},
	{
		question: " What if I'm not satisfied with the quality of your work?",
		answer:
			"While this is rare, with JobMingle, you receive unlimited revisions till you are satisfied.",
	},
	{
		question: " How can I make payment for your services?",
		answer:
			"For the meantime, you can pay to our account details below and send proof of payment to our WhatsApp line below. Account details:2044112176 JobMingle Nigeria Firstbank ,WhatsApp line: 07077308481",
	},
];

//Slides
export const slides = [
	{
		imagesone: SlideImage1,
		headerText: "The Journey To Your New Career Begins Now!",
	},
	{
		imagesone: SlideImage2,
		headerText: "Your Dream Remote Job Awaits ",
	},
	{
		imagesone: SlideImage3,
		headerText: "Let Us Skill You Up And Guide You There ",
	},
];

//Why Choose Us Section data | Home Page
export const whyChooseUsData = [
	{
		img: WhyUsImg1,
		title: "Commitment ",
		description:
			"We are Completely committed to helping you secure your dream remote job, enabling you live the life you were meant to live.",
	},
	{
		img: WhyUsImg2,
		title: "Quality Services",
		description:
			"We offer the finest digital courses designed to equip you with the skills of your choice, placing you among the top 1% in  the country.",
	},
	{
		img: WhyUsImg3,
		title: "You Are Our Priority",
		description:
			"At JobMingle, we prioritize you in every decision we make , ensuring that you receive the best possible experience when using our product.",
	},
];

// Job Tags
export const jobTags = [
	"Sales",
	"Fulltime",
	"Remote",
	"Product designer",
	"Senior level",
	"Illustrator",
	"Co-Founder",
	"Senior Dev",
	"Researcher",
	"Project manager",
	"Designer",
	"Graphic designer",
];

// Partners Logo
export const partnersLogos = [
	{ img: TalentSync },
	{ img: ImpressionHub },
	{ img: IncRemote },
	{ img: Raiz },
	{ img: Vent },
	{ img: TalentSync },
	{ img: ImpressionHub },
	{ img: IncRemote },
	{ img: Raiz },
	{ img: Vent },
];
