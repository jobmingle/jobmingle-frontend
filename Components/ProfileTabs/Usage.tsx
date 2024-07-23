import React from "react";
import {usage} from "../Constants";

const Interests: React.FC = ({}) => {
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
         <p className="montserrat font-semibold text-sm my-4 sm:text-lg text-black-100 w-full text-center px-4">
            which of these do you want <br /> to do on jobmingle
         </p>
         <div className="flex flex-col space-y-6 justify-center">
            {usage.map((item) => (
               <li
                  className=" list-none py-3 cursor-pointer pl-2 border-black-100 border-solid border-[1px] sora rounded-[10px] capitalize "
                  key={item.id}
                  id={item.title}
                  onClick={() => handleSelected(item.title)}
               >
                  {item.title}
               </li>
            ))}
         </div>
      </div>
   );
};

export default Interests;
