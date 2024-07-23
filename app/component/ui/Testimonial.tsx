"use client";

import { useEffect, useRef } from "react";
import KeenSlider, { KeenSliderInstance, KeenSliderOptions } from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { testimonials } from "@/lib/_exportLinks";
import Image from "next/image";

const KeenSliderComponent: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const options: KeenSliderOptions = {
      loop: true,
      slides: {
        origin: "center",
        perView: 1, // Default to 1 slide per view for mobile
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            origin: "auto",
            perView: 2, // 2 slides per view for small screens
            spacing: 16,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 3, // 3 slides per view for larger screens
            spacing: 32,
          },
        },
      },
    };

    const keenSliderInstance = new KeenSlider(sliderRef.current, options);

    const handlePrevClick = () => keenSliderInstance.prev();
    const handleNextClick = () => keenSliderInstance.next();

    if (prevRef.current)
      prevRef.current.addEventListener("click", handlePrevClick);
    if (nextRef.current)
      nextRef.current.addEventListener("click", handleNextClick);

    return () => {
      if (prevRef.current)
        prevRef.current.removeEventListener("click", handlePrevClick);
      if (nextRef.current)
        nextRef.current.removeEventListener("click", handleNextClick);
      keenSliderInstance.destroy();
    };
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              ref={prevRef}
              className="rounded-full border border-yellow-500 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              ref={nextRef}
              className="rounded-full border border-yellow-400 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=" mt-8 lg:col-span-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div className="flex items-center">
                    {testimonial.IMG && (
                      <Image
                        src={testimonial.IMG}
                        alt={testimonial.name}
                        className="h-12 w-12  object-cover rounded-full"
                        width={48}
                        height={48}
                      />
                    )}
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-yellow-400 sm:text-3xl">
                        {testimonial.name}
                      </p>
                      {testimonial.role && (
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="mt-4 leading-relaxed text-gray-700">
                    {testimonial.review}
                  </p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeenSliderComponent;
