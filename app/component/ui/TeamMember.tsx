import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Omole Usuangbon",
    role: "CEO",
    src: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80",
  },
  {
    name: "Praise Amos",
    role: "Co-Founder",
    src: "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80",
  },
  {
    name: "Tejiri Omaduvie",
    role: "Product Designer",
    src: "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80",
  },
  {
    name: "Iwuanyanwu Anselm",
    role: "Backend Developer, CTO",
    src: "https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80",
  },
  {
    name: "Princess Ikoko",
    role: "Brand/Graphic Designer",
    src: "https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80",
  },
];

export default function TeamSection() {
  return (
    <div className="flex mt-3 items-center justify-center min-h-screen bg-white py-8">
      <div className="flex flex-col">
        <div className="flex flex-col mt-5">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div data-aos="fade-up" className="w-full lg:w-6/12 px-4">
                <h1 className="text-gray-900 text-4xl font-bold mb-8">
                  Meet the Team
                </h1>
                <p className="text-gray-700 text-lg font-light">
                  With over 100 years of combined experience, we've got a
                  well-seasoned team at the helm.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
                >
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <img
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={member.src}
                        alt={`${member.name} photo`}
                      />
                    </a>
                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">
                        {member.name}
                      </h1>
                      <div className="text-gray-700 font-light mb-2">
                        {member.role}
                      </div>
                      <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                        >
                          <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
