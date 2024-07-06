import Image from "next/image";
import CEO from "@/public/ceo.jpeg";
import CoFounder from "@/public/coFounder.jpeg";
import ProductDesigner from "@/public/productDesigner.jpeg";
import CTO from "@/public/CTO.jpeg";
import BrandDesigner from "@/public/graphicsdesigner.jpeg";

const teamMembers = [
  {
    name: "Omole Usuangbon",
    role: "CEO",
    src: CEO,
  },
  {
    name: "Praise Amos",
    role: "Co-Founder",
    src: CoFounder,
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
                  With years of combined experience, we've got a well-seasoned
                  team at the helm.
                </p>
              </div>
            </div>
            <div className="flex overflow-x-auto max-md:overflow-x-hidden  max-md:flex-col space-x-6 py-4 px-6 custom-scrollbar">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  className="flex-shrink-0 w-[300px] md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
                >
                  <div className="flex flex-col items-center">
                    <Image
                      className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                      src={member.src}
                      alt={`${member.name} photo`}
                      width={200}
                      height={200}
                    />
                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">
                        {member.name}
                      </h1>
                      <div className="text-gray-700 font-light mb-2">
                        {member.role}
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
