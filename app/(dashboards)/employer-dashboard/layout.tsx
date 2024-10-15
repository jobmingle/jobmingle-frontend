import Logo from "@/app/_components/ui/Logo";
import Jmlogo from "@/public/jobmingle.png";
import Nav from "./Nav";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <main className="grid grid-cols-12 h-screen relative">
         <aside className=" absolute md:static bottom-0 h-20 md:min-h-screen w-full md:w-auto md:bottom-auto md:col-span-2 bg-gray-300  flex md:flex-col text-center items-center  md:gap-14 md:pl-[1rem] py-[0.7rem] md:py-[3.2rem] z-40 md:z-auto">
            <div className="mx-auto hidden md:flex">
               <Logo path={Jmlogo} width={120} height={120} />
            </div>
            <Nav />
         </aside>
         <div className="col-span-12 md:col-span-10 sm:px-2 w-full max-h-[100vh] overflow-auto">{children}</div>
      </main>
   );
}
