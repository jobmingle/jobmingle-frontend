"use client";

import Head from "next/head";
import { useState } from "react";
import "@/app/globals.css";
import bg from "@/public/hello.png";
import Button from "../atoms/Button";
type Props = {
  title: string;
  description: string;
  aos: string;
  aostime: string;
  n: string;
  hasMoreInfo?: boolean;
  onSeeMoreClick?: () => void;
};

function ServiceCard({
  title,
  description,
  aos,
  aostime,
  n,
  hasMoreInfo,
  onSeeMoreClick,
}: Props) {
  return (
    <div>
      <div
        data-aos={aos}
        data-aos-duration={aostime}
        className="shadow-lg max-md:mt-3 z-10 flex-shrink-0 w-[350px] text-slate-400 h-[480px] max-md:h-fit hover:text-[#27272a] rounded-2xl border-2 border-blue-100 pl-5 pt-2 transition duration-500 hover:shadow-lg max-md:w-[300px] max-md:hover:ml-[5px] max-md:p-[9px] group border-animate"
      >
        <div className="relative z-20 flex-shrink-0 w-12 h-12 rounded-full bg-[#FFBE0B] flex items-center justify-center my-5">
          <p className="text-2xl font-bold h-5 w-5 text-black">{n}</p>
        </div>
        <div className="font-bold text-[16px] leading-loose mb-3 text-[black]">
          {title}
        </div>
        <div className="font-medium font-sans leading-normal mr-5">
          {description}
        </div>
        {hasMoreInfo && (
          <Button
            onClick={onSeeMoreClick}
            className="w-[150px] mt-3 max-md:w-[150px] rounded-lg text-[12px] text-black border-white border-solid bg-[#f5cb1a]"
          >
            <span className="mr-2">See More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        )}
      </div>
    </div>
  );
}

function HowItWorks() {
  const [isRecruitmentModalOpen, setIsRecruitmentModalOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const handleRecruitmentSeeMoreClick = () => {
    setIsRecruitmentModalOpen(true);
  };

  const handleCvSeeMoreClick = () => {
    setIsCvModalOpen(true);
  };

  const closeRecruitmentModal = () => {
    setIsRecruitmentModalOpen(false);
  };

  const closeCvModal = () => {
    setIsCvModalOpen(false);
  };

  return (
    <div
      className={`flex flex-col items-center mt-[72px] justify-center ${
        isRecruitmentModalOpen || isCvModalOpen ? "blur-background" : ""
      }`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-9738664936744628" />
      </Head>
      <div
        className="Ellipse1 w-96 h-96 opacity-80 z-10 bg-[#f5cb1a63] rounded-full blur-[190px] absolute left-[70%] bottom-[20%] max-md:hidden"
        data-aos="zoom-in"
      />

      <h3 className="mt-[3%] text-4xl font-bold max-md:text-4xl max-md:text-left">
        OUR SERVICES
      </h3>

      <div className="h-full my-[1%] max-md:h-fit max-md:mt-[10px]">
        <div className="flex flex-wrap justify-center items-center mt-8 gap-5">
          <ServiceCard
            title="RE-SKILLING"
            aostime="3000"
            n="1"
            aos="fade-left"
            description="Transitioning to a new career doesn't have to be difficult. All you need is the right kind of training
            to acquire the skills necessary for success, and that's precisely what JobMingle offers. We
            provide you with access to the right courses and experts that guide you from being a novice to a
            pro."
          />
          <ServiceCard
            title="UP-SKILLING"
            aostime="3000"
            n="2"
            aos="fade-up"
            description="To stand out in your niche, you must constantly seek ways to improve your existing skills. For
            example, as a Facebook ads expert, it also makes sense to have comprehensive knowledge of
            Google advertising. At JobMingle, we offer a wide variety of digital courses that provide you with
            opportunities to advance your career with ease."
          />
          <ServiceCard
            title="REMOTE JOB LISTINGS"
            aostime="3000"
            aos="fade-right"
            n="3"
            description="In today's world, acquiring a digital skill is not enough; you must be ready to put it to work. One
            of the challenges faced by new freelancers today is the scarcity of remote job opportunities.
            That's why at JobMingle, we not only enhance your skills, but we also provide access to
            numerous remote job opportunities across the country."
          />

          <ServiceCard
            title="RECRUITMENT (Done-For-You)"
            aostime="3000"
            aos="fade-right"
            n="4"
            description="You don't have to subject yourself to the stress of sifting through numerous CVs and conducting interviews with hundreds of applicants to find the right candidate. Let our HR team handle that for you. They'll help you shortlist the top 3 candidates, and then you can make the final hiring decision."
            hasMoreInfo={true}
            onSeeMoreClick={handleRecruitmentSeeMoreClick}
          />
          <ServiceCard
            title="CV SERVICES/PORTFOLIO WEBSITE"
            aostime="3000"
            aos="zoom-in"
            n="5"
            description="Tired of writing cover letters and submitting CVs that fail to land interviews? 
            Do you need a professional portfolio that showcases your skills, past work samples, and clearly communicates your expertise to potential employers? 
            If so, our expert CV writer and portfolio developer can help you boost your interview chances today...
            By creating a personalized CV and portfolio that meet your needs and help you stand out in the job market."
            hasMoreInfo={true}
            onSeeMoreClick={handleCvSeeMoreClick}
          />

          {/* video card           */}
        </div>
      </div>

      {isRecruitmentModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeRecruitmentModal}
          ></div>
          <div className="bg-white rounded-lg p-8 z-50 w-[90%] max-w-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">More Information</h2>
            <p className="text-lg leading-relaxed">
              <strong>What Our HR Experts Will Do For You:</strong>
              <ul className="list-disc ml-5 mt-2">
                <li>
                  Craft a well-tailored job description and responsibilities.
                </li>
                <li>
                  Post the job on our platform and various communities to
                  attract high-quality candidates.
                </li>
                <li>
                  Our HR team will screen and shortlist the top 10 candidates
                  for the role.
                </li>
                <li>
                  Conduct interviews to ensure they are qualified for the
                  position.
                </li>
                <li>Deliver the top 3 candidates to you within a few days.</li>
              </ul>
              <div className="mt-4">
                <strong>FEE:</strong> #10,000
              </div>
              <div className="mt-2 flex items-center">
                WhatsApp/Call us here:{" "}
                <a
                  href="https://wa.me/2347077308481"
                  className="text-blue-500 text-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fff"
                      d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
                    ></path>
                    <path
                      fill="#cfd8dc"
                      d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
                    ></path>
                    <path
                      fill="#40c351"
                      d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  07077308481
                </a>
              </div>
            </p>
            <button
              onClick={closeRecruitmentModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isCvModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeCvModal}
          ></div>
          <div className="bg-white rounded-lg p-8 z-50 w-[90%] max-w-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">More Information</h2>
            <p className="text-lg leading-relaxed">
              Our CV and portfolio services are designed to help you stand out
              in the competitive job market. Our expert writers will craft a
              personalized CV that highlights your skills and experiences in the
              best possible way. Additionally, we can create a professional
              portfolio website that showcases your work samples, projects, and
              achievements, making it easier for potential employers to see your
              capabilities and consider you for the role.
            </p>
            <button
              onClick={closeCvModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HowItWorks;
