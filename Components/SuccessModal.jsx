import React from "react";
import success from "../app/Signin/Images/IconSuccess.png";
import Image from "next/image";
import Link from "next/link";
const Modal = ({Act, whereto, linkto}) => {
   return (
      <div className="absolute bg-black-100/50 top-0 bottom-0 left-0 right-0 z-30 w-full h-full flex flex-col justify-center items-center">
         <div className="bg-white max-w-[19rem] w-[19rem] h-[12rem] rounded-[4px] flex flex-col justify-center items-center space-y-2">
            <Image src={success} alt="successicon" className=" scale-50 " />
            <p className="text-xs text-center sora px-4"> {Act}</p>
            <Link href={linkto} className="text-[#F6CC16] underline tracking-wide text-sm montserrat">
               {whereto}
            </Link>
         </div>
      </div>
   );
};

export default Modal;
