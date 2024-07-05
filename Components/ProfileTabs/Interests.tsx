import React from "react";
import {UserInterest} from "../Constants";

const Interests: React.FC = ({}) => {
   const handleSelected = (e: any): void => {
      e.preventDefault();
      console.log("hello");
   };

   return (
      <div className=" w-full">
         <p className="montserrat font-semibold text-sm my-2 sm:text-lg text-black-100 w-full text-center px-4">which of these are you interested in</p>
         <div className="flex flex-col space-y-2 justify-center">
            {UserInterest.map(({id, title}) => (
               <li
                  className=" list-none py-2 xl:py-3 cursor-pointer pl-2 border-black-100 border-solid border-[1px] sora rounded-[10px] capitalize "
                  key={id}
                  onClick={() => handleSelected}
               >
                  {title}
               </li>
            ))}
         </div>
      </div>
   );
};

export default Interests;

