"use client";
import Image from "next/image";
import Nav from "./Nav";
import tiredicon from "../../public/tiredicon.png";
import editicon from "../../public/editicon.png";
import {useState} from "react";
import Modal from "./components/Modal";
export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const username = "Prosper Williams";
   const location = "Benin City Nigeria";
   const [Active, setActive] = useState(false);
   return (
      <main>
         <div className="flex h-screen relative">
            {Active ? <Modal setActive={setActive} /> : null}
            <Nav />
            <div className="sm:px-2 w-full max-h-[100vh] overflow-auto">
               <section className="m-auto max-w-[22rem] flex flex-col justify-center py-2 sm:px-2 my-4 border">
                  <main className=" flex justify-center flex-row items-center gap-3">
                     <div className=" flex-2">
                        {" "}
                        <Image src={tiredicon} alt="profile image" className="max-w-[5.6rem] sm:max-w-[6rem] object-cover" />
                     </div>
                     <div className="flex-grow text-center">
                        {" "}
                        <h3 className="font-bold text-xl montserrat">{username}</h3>
                        <p className="sora text-sm">{location}</p>
                        <button className="text-xs border rounded-md px-2 py-1 sora mt-1" onClick={() => setActive(true)}>
                           Edit
                        </button>
                     </div>
                  </main>
               </section>
               {children}
            </div>
         </div>
      </main>
   );
}
