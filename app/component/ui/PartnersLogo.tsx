import Image from "next/image";
import GoogleLogo from "@/public/logo2.png";
import BinanceLogo from "@/public/logo3.jpeg";
import PlaceholderLogo from "@/public/LUSH.png";
import PlaceholderLogos from "@/public/logo5.jpeg";

const PartnersSponsors = () => {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto bg-white shadow-lg rounded-md p-6 border border-gray-300 relative">
        <h2 className="text-center text-2xl font-bold text-yellow-500 mb-6">
          Our Partners and Sponsors
        </h2>
        <div className="flex justify-around items-center">
          <div className="border p-2">
            <Image src={GoogleLogo} alt="Google" className="w-full h-full" />
          </div>

          <div className="border p-2">
            <Image src={BinanceLogo} alt="Binance" className="w-full h-full" />
          </div>

          <div className="border p-2">
            <Image
              src={PlaceholderLogo}
              alt="Placeholder"
              className="w-full h-full"
            />
          </div>
          <div className="border p-2">
            <Image
              src={PlaceholderLogos}
              alt="Binance"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-yellow-500 animate-border-blink"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-yellow-500 animate-border-blink"></div>
      </div>
    </section>
  );
};

export default PartnersSponsors;
