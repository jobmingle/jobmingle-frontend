import Button from "../component/Button";
export default function Contact() {
  return (
    <section
      className="flex flex-col items-center justify-center w-full  "
      style={{ fontFamily: "Ubuntu" }}
    >
      {/* Contact Info Section */}
      <h1 className="text-2xl mb-8 text-yellow-400 font-bold">
        Contact Information
      </h1>
      <div className="flex flex-col lg:flex-row text-white w-full items-center justify-center gap-6 lg:gap-24 p-6">
        {/* Email and Phone */}
        <div className="flex flex-col items-start justify-center  h-[200px] w-[800px] lg:w-auto bg-white text-black p-10 rounded border-2 border-gray-400 shadow-lg">
          <p className="flex items-center mb-4">
            <span className="font-bold mr-2">Email:</span> Jobmingle@info.com
          </p>
          <p className="flex items-center">
            <span className="font-bold mr-2">Phone:</span> 12345709876543
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex  text-black  font-bold flex-col w-[760px] max-md:w-fit lg:w-auto bg-white p-6 rounded border-2 border-gray-400 shadow-lg">
          <label htmlFor="Name"> Name</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full text-[#A09999]  bg-[#D2CFCF] md:w-[500.2px] h-[78px] p-2 border rounded  border-opacity-0 mb-4    "
          />
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full text-[#A09999]  bg-[#D2CFCF] md:w-[500.2px] h-[78px] p-2 border rounded  border-opacity-0 mb-4    "
          />
          <label htmlFor="message">message</label>
          <input
            placeholder="Message/Comment"
            className="w-full text- #A09999]  bg-[#D2CFCF] md:w-[500.2px] h-[78px] p-2 border rounded  border-opacity-0 mb-4    "
          />
          <Button className="w-full bg-yellow-400 text-white py-2 rounded-[10px] hover:bg-yellow-500">
            Send Message Now
          </Button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-4">Never miss out on our updates, freebies and news</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full text-[#A09999]  bg-[#D2CFCF] md:w-[500.2px] p-5 border rounded  border-opacity-0     "
          />
          <Button className="bg-yellow-400 text-white py-2 px-4 rounded-[10px] h-[30px]  w-[300px] max-md:w-[100px] hover:bg-yellow-500">
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
}
