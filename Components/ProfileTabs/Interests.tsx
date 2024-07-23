import React from "react";
import {UserInterest} from "../Constants";

const Interests: React.FC = ({}) => {
   //
   const handleSelected = (title: string): void => {
      console.log(title);
      let element = document.getElementById(title);

      if (element) {
         element.style.border = "1.5px solid #F6CC16";
         element.style.color = " #F6CC16";
      } else {
         return;
      }
   };

   return (
      <div className=" w-full">
         <p className="montserrat font-semibold text-sm my-2 sm:text-lg text-black-100 w-full text-center px-4">which of these are you interested in</p>
         <div className="flex flex-col space-y-4 justify-center">
            {UserInterest.map((item) => (
               <li
                  className=" list-none py-2 xl:py-3 cursor-pointer pl-2 border-black-100 border-solid border-[1px] sora rounded-[10px] capitalize "
                  key={item.id}
                  onClick={() => handleSelected(item.title)}
                  id={item.title}
               >
                  {item.title}
               </li>
            ))}
         </div>
      </div>
   );
};

export default Interests;
