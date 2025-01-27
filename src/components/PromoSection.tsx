"use client";

import { PromoSectionProps } from "@/types/types";
import { useState, useEffect } from "react";

const PromoSection: React.FC<PromoSectionProps> = ({ discount, message, endDate }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      const endTime = new Date(endDate).getTime();
      const currentTime = new Date().getTime();
      const timeRemaining = endTime - currentTime;
      setTimeLeft(timeRemaining);

      if (timeRemaining <= 0) {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [endDate]);

  const formatTime = (time: number) => {
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="bg-primary text-white p-6 rounded-t-lg shadow-lg">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold mb-2">{message}</h2>
          <p className="text-lg font-medium text-lightGray">Discount: {discount}</p>
        </div>

        <div className="flex items-center justify-center sm:justify-end mt-4 sm:mt-0">
          <div className="bg-primaryLight text-darkGray p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Hurry Up! Offer Ends In:</h3>
            <p className="text-xl font-bold">{formatTime(timeLeft)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
