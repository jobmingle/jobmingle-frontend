"use client";
import {useAuth} from "@/app/_contexts/auth/AuthState";
import {useRouter} from "next/navigation";
import Button from "../_components/ui/Button";
import {useState} from "react";
import Link from "next/link";

const UserDashboard = () => {
   const router = useRouter();
   const {logout} = useAuth();
   const [Active, setActive] = useState(false);
   function handleLogout() {
      logout();
   }

   return (
      <div className="flex h-screen">
         {/* Sidebar */}
         <aside className={` w-16 md:w-64 bg-gray-800 text-white flex flex-col items-center md:items-start border`}>
            <div className="p-6">
               <h1 className="text-2xl font-bold hidden md:flex">Dashboard</h1>
            </div>
            <nav className="flex-1 px-4 space-y-4">
               <Link  href="/profile" className="block py-2 px-3 rounded hover:bg-gray-700">
                  <p className="hidden md:flex"> Jobs</p>
                  <p className=" md:hidden" title="Jobs"> J</p>
               </Link>
               <Link href="/profile/password" className="block py-2 px-3 rounded hover:bg-gray-700">
                  <p className="hidden md:flex">List a Job</p>
                  <p className=" md:hidden" title="Settings"> S</p>
               </Link>

               <Button onClick={handleLogout} type="logout">
                  <p className="hidden md:flex"> Logout</p>
                  <span className="md:hidden" title="Logout">L</span>
               </Button>
            </nav>
         </aside>
      </div>
   );
};

export default UserDashboard;
