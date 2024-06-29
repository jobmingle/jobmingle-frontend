import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-yellow-500 py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Social Media and Contact Info */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <div className="flex space-x-4 mb-4">
            {/* Placeholder for social media icons */}
            <Link
              href="#"
              className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full"
            >
              <Image
                src="/facebook-icon.png"
                alt="Facebook"
                width={16}
                height={16}
              />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full"
            >
              <Image
                src="/twitter-icon.png"
                alt="Twitter"
                width={16}
                height={16}
              />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full"
            >
              <Image
                src="/instagram-icon.png"
                alt="Instagram"
                width={16}
                height={16}
              />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full"
            >
              <Image
                src="/linkedin-icon.png"
                alt="LinkedIn"
                width={16}
                height={16}
              />
            </Link>
          </div>
          <p className="text-gray-800">Call us at: 12345709876</p>
          <p className="text-gray-800">
            Email us at:{" "}
            <Link href="mailto:hello@jobmingle.co" className="text-yellow-500">
              hello@jobmingle.co
            </Link>
          </p>
        </div>

        {/* Links Section */}
        <div className="flex justify-between w-full lg:w-auto">
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 mx-4">
            <h3 className="font-bold mb-2">Links</h3>
            <Link href="#" className="hover:underline">
              Jobs
            </Link>
            <Link href="#" className="hover:underline">
              Courses
            </Link>
            <Link href="#" className="hover:underline">
              About Us
            </Link>
          </div>
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 mx-4">
            <h3 className="font-bold mb-2">Links</h3>
            <Link href="#" className="hover:underline">
              Services
            </Link>
            <Link href="#" className="hover:underline">
              Terms and Conditions
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 mx-4">
            <h3 className="font-bold mb-2">Links</h3>
            <Link href="#" className="hover:underline">
              Products
            </Link>
            <Link href="#" className="hover:underline">
              Support
            </Link>
            <Link href="#" className="hover:underline">
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-gray-600">
          © Copyright 2023 Jobmingle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
