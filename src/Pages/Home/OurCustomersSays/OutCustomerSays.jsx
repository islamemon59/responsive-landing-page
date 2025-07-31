import React, { useState } from "react";

// Custom SVG for the large quote icon (from previous response, exact match)
const QuoteSvgIcon = () => (
  <svg
    width="64"
    height="48"
    viewBox="0 0 64 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-lime-500 mb-4"
  >
    <path
      d="M0 48V32C0 25.0667 2.38333 18.9167 7.15 13.55C11.9167 8.18333 17.65 3.86667 24.35 0L28 6.06667C22.0667 9.53333 17.5167 13.9667 14.35 19.3667C11.1833 24.7667 9.5 30.5667 9.25 36.8L9 48H0ZM36 48V32C36 25.0667 38.3833 18.9167 43.15 13.55C47.9167 8.18333 53.65 3.86667 60.35 0L64 6.06667C58.0667 9.53333 53.5167 13.9667 50.35 19.3667C47.1833 24.7667 45.5 30.5667 45.25 36.8L45 48H36Z"
      fill="currentColor"
    />
  </svg>
);

// Array of testimonial data
// Ensure these image URLs are direct links to the images (e.g., .png, .jpg)
const testimonials = [
  {
    quote:
      "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
    author: "Samuel Varughese",
    image: "https://ibb.co/qF067Ksg", // Your provided image link
    logo: "https://i.ibb.co/7J5kpw39/download-1.png", // Your provided icon image link
  },
  {
    quote:
      "Outstanding service! The team was highly professional and delivered exactly what was promised. My business has seen significant improvements since implementing their solutions.",
    author: "Jane Smith",
    image: "https://ibb.co/qF067Ksg", // Placeholder for another image
    logo: "https://i.ibb.co/7J5kpw39/download-1.png",
  },
  {
    quote:
      "From start to finish, the experience was seamless. Great communication and an excellent end product. I couldn't be happier with the outcome.",
    author: "John Doe",
    image: "https://ibb.co/qF067Ksg", // Placeholder for another image
    logo: "https://i.ibb.co/7J5kpw39/download-1.png",
  },
];

const OurCustomerSays = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  const goToPrevious = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    );
  };

  const goToDot = (index) => {
    setCurrentTestimonialIndex(index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Why Customers Love <span className="text-blue-600">Us?</span>
        </h2>

        {/* Testimonial Cards Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          {/* Left Card: Testimonial Content */}
          <div
            className="
            flex-1 bg-gray-50 rounded-2xl p-8 shadow-lg w-full max-w-2xl lg:max-w-none
            relative overflow-hidden
            before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-24
            before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgNCA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNFMEUwRTAiLz48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoOTApIiBmaWxsPSIjRjBGMEYwIi8+PC9zdmc+')]]
            before:bg-repeat before:opacity-100 before:z-0
          "
          >
            <div className="relative z-10">
                <img src="https://i.ibb.co/7J5kpw39/download-1.png" alt="logo" />
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {currentTestimonial.quote}
              </p>
              <div className="flex justify-between items-center border-t border-gray-200 pt-6">
                <p className="text-gray-900 font-semibold text-lg">
                  - {currentTestimonial.author}
                </p>
                <div className="flex space-x-4">
                  {/* Left Arrow Button */}
                  <button
                    onClick={goToPrevious}
                    className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    aria-label="Previous Testimonial"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                  </button>
                  {/* Right Arrow Button */}
                  <button
                    onClick={goToNext}
                    className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    aria-label="Next Testimonial"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Customer Image */}
          <div
            className="
            flex-shrink-0 w-full max-w-xs lg:w-80 rounded-2xl h-[608px] overflow-hidden shadow-lg relative p-4 bg-[#F2F4F6]
          "
          >
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.author}
              className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              style={{ minHeight: "300px" }}
            />
            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToDot(index)}
                  className={`h-2 w-2 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    index === currentTestimonialIndex
                      ? "bg-orange-400"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCustomerSays;
