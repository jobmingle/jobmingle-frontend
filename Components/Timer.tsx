"use client";
import React, {useState, useEffect} from "react";

interface Timerprops {
   minute: number;
   secs: number;
}

const Timer: React.FC<Timerprops> = ({minute, secs}) => {
   const [timeLeft, setTimeLeft] = useState(minute * secs);

   useEffect(() => {
      const timer = setInterval(() => {
         setTimeLeft((prevTime) => {
            if (prevTime <= 1) {
               clearInterval(timer);
               return 0;
            }
            return prevTime - 1;
         });
      }, 1000);

      return () => clearInterval(timer);
   }, []);

   const minutes = Math.floor(timeLeft / 60);
   const seconds = timeLeft % 60;

   return (
      <div>
         <p>
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
         </p>
      </div>
   );
};

export default Timer;
