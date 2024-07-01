import Image from "next/image";
import image1 from "@/public/jobSearch.jpg";
const teamMembers = [
  { name: "John Doe", role: "CEO", src: "" },
  { name: "Jane Doe", role: "CTO", src: "" },
  { name: "John Soe", role: "CFO", src: "" },
  { name: "Jayyy Dee", role: "Legal Adviser", src: "" },
];

export default function TeamSection() {
  return (
    <div className="flex justify-center items-center  ">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-yellow-500 mb-8">Our Team</h1>
        <div className="flex flex-wrap flex-1 justify-center space-x-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <Image
                src={member.src}
                alt={member.name}
                className="w-25 h-25 rounded-full object-cover border-4 border-gray-300 shadow-lg"
                width={104}
                height={104}
              />
              <h2 className="text-xl font-semibold mt-4">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
