import React from "react";

const TestimonialCard = ({ img, name, role, review }: any) => {
  return (
    <div className="p-4">
      <figure className="md:flex max-w-5xl bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
          src={img}
          alt={name}
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium dark:text-slate-100">{review}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{name}</div>
            <div className="text-slate-700 dark:text-slate-400">{role}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Daniella Doe",
    role: "Mobile dev",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Jane Doe",
    role: "Marketing",
    review:
      "Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Yanick Doe",
    role: "Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Jane Doe",
    role: "Mobile dev",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/62.jpg",
    name: "Andy Doe",
    role: "Manager",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Yanndy Doe",
    role: "Mobile dev",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          img={testimonial.img}
          name={testimonial.name}
          role={testimonial.role}
          review={testimonial.review}
        />
      ))}
    </div>
  );
};

export default Testimonials;
