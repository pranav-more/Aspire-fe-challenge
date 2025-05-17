import { useState } from "react";
import { DebitCard } from "../types";

interface CardDetailsProps {
  currentCard: DebitCard;
}

export default function CardDetails({ currentCard }: CardDetailsProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Get the last 4 digits of the card number
  const lastFourDigits = currentCard?.cardNumber.split(" ").pop() || "****";

  return (
    <div className="w-full rounded-xl overflow-hidden border">
      <div className="flex items-center justify-between p-6 bg-[#EDF3FF]">
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-[#325BAF] mr-3"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H2C0.9 2 0 2.9 0 4V12C0 13.1 0.9 14 2 14H14C15.1 14 16 13.1 16 12V4C16 2.9 15.1 2 14 2ZM14 12H2V8H14V12ZM14 6H2V4H14V6Z"
              fill="#325BAF"
            />
          </svg>
          <span className="font-medium text-[#0C365A]">Card details</span>
        </div>
        <button
          onClick={handleToggle}
          className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#DFEAF2]"
          aria-expanded={isOpen}
          aria-controls="card-details-panel"
          tabIndex={0}
        >
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10l5 5 5-5z" fill="#DFEAF2" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div id="card-details-panel" className="px-6 pb-8">
          <div className="space-y-5">
            <div className="flex justify-between pt-2">
              <span className="text-[#AAAAAA] text-base">Card Name</span>
              <span className="font-medium text-base text-[#0C365A]">
                {currentCard.name}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#AAAAAA] text-base">Card Number</span>
              <span className="font-medium text-base text-[#0C365A]">
                •••• •••• •••• {lastFourDigits}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#AAAAAA] text-base">Expiry Date</span>
              <span className="font-medium text-base text-[#0C365A]">
                {currentCard.expiryDate}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#AAAAAA] text-base">CVV</span>
              <span className="font-medium text-base text-[#0C365A]">***</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#AAAAAA] text-base">Status</span>
              <span className="font-medium text-base text-[#0C365A]">
                {currentCard.frozen ? (
                  <span className="text-red-500">Frozen</span>
                ) : (
                  <span className="text-[#01D167]">Active</span>
                )}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
