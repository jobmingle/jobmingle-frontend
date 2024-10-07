import Image from "next/image";
import Nav from './Nav'
import tiredicon from "../../public/tiredicon.png";
import editicon from "../../public/editicon.png";
export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const username = "Prosper Williams";
   const location = "Benin City Nigeria";
   return (
      <main>
         <div className="flex h-screen">
            <Nav />
            <div className="md:px-2 w-full max-h-[100vh] overflow-auto">{children}</div>
         </div>
      </main>
   );
}
