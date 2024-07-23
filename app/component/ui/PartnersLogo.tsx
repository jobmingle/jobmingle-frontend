import Image from "next/image";
import GoogleLogo from "@/public/logo4.png";
import BinanceLogo from "@/public/logo3.jpeg";
import PlaceholderLogo from "@/public/LUSH.png";
import PlaceholderLogos from "@/public/logo5.jpeg";
import Lush from "@/public/Photo from Omole.jpg";

const PartnersSponsors = () => {
  return (
    <section className=" py-8">
      <div className="container mx-auto bg-white shadow-lg rounded-md p-6 border  relative">
        <h2 className="text-center text-2xl font-bold text-yellow-500 mb-6">
          OUR PARTNERS
        </h2>
        <div
          data-aos="zoom-in"
          className="flex max-md:flex-col justify-around items-center"
        >
          <div>
            <Image src={GoogleLogo} alt="Google" width={96} height={96} />
          </div>
          <div className=" text-black">
            <Image src={BinanceLogo} alt="Binance" />
          </div>
          <div className="w-24 h-24">
            <Image
              src={PlaceholderLogo}
              alt="Placeholder"
              width={96}
              height={96}
            />
          </div>
          <div className="w-24 h-24">
            <Image src={Lush} alt="Placeholder" width={96} height={96} />
          </div>
          <div className="w-24 h-24">
            <Image
              src={PlaceholderLogos}
              alt="Placeholder"
              width={96}
              height={96}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSponsors;
