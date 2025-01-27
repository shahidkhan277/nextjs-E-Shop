"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "@/data/data";
import "swiper/css"; // Correct CSS import for Swiper v11.2.1+


const CustomerReviews: React.FC = () => {
  return (
    <div className="p-6 bg-lightGray">
      <h2 className="text-2xl font-bold text-center text-darkGray mb-8">Customer Reviews</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="swiper-container"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-darkGray">{review.name}</h3>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={index < review.rating ? "#FFD700" : "#e4e5e9"}
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                      >
                        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.64L12 2 9.91 8.6 3 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-darkGray mt-4">{review.reviewText}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 text-center">
        <button className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primaryLight transition">
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
