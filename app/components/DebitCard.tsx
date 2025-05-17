import { DebitCard as DebitCardType } from "../types";
import { useMemo } from "react";

interface DebitCardProps {
  card: DebitCardType;
  showCardNumber: boolean;
  index: number;
}

// Array of aesthetic card background colors
const cardColors = [
  "bg-[#01D167]", // Default green (flat color to match design)
  "bg-[#7758F3]", // Purple
  "bg-gradient-to-br from-[#325BAF] to-[#1E3B8B]", // Blue
  "bg-gradient-to-br from-[#FF8B62] to-[#D65E39]", // Orange
  "bg-gradient-to-br from-[#FF6262] to-[#D63939]", // Red
];

export default function DebitCard({
  card,
  showCardNumber,
  index,
}: DebitCardProps) {
  const displayCardNumber = useMemo(() => {
    if (showCardNumber) {
      return card.cardNumber;
    } else {
      // Get the parts of the card number
      const parts = card.cardNumber.split(" ");
      // Only mask the first three groups, keep the last group visible
      const maskedParts = parts.map((part, idx) =>
        idx < parts.length - 1 ? part.replace(/\d/g, "•") : part
      );
      return maskedParts.join(" ");
    }
  }, [card.cardNumber, showCardNumber]);

  // Generate a consistent color based on card ID
  const cardColor = useMemo(() => {
    // Use the card ID to generate a consistent index
    const cardIdSum = card.id
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);

    // Select color based on the hash of the ID
    const colorIndex = cardIdSum % cardColors.length;
    return cardColors[colorIndex];
  }, [card.id]);

  return (
    <div
      className={`relative w-full rounded-xl p-8 text-white
        ${card.frozen ? "opacity-70" : "opacity-100"}
        ${cardColor}`}
      aria-label={`Debit card for ${card.name}`}
    >
      {/* Card Number Badge - Top Right */}
      <div className="absolute top-8 right-8">
        <div className="relative flex items-center gap-2">
          <span className="text-white font-bold text-lg">Aspire</span>
          <div className="w-6 h-6 rounded-full bg-[#F1AC2B] flex items-center justify-center">
            <span className="text-white font-bold text-sm">{index + 1}</span>
          </div>
        </div>
      </div>

      {/* Card Holder Name */}
      <div className="mt-12 mb-8">
        <h2 className="text-3xl font-bold">{card.name}</h2>
      </div>

      {/* Card Number */}
      <div className="mb-8 flex space-x-4">
        {displayCardNumber.split(" ").map((group, index) => (
          <div key={index} className="flex space-x-1">
            {group.split("").map((char, charIndex) => (
              <span key={charIndex} className="text-xl">
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Expiry and CVV */}
      <div className="flex justify-between pr-20">
        <div>
          <p className="text-sm opacity-90">Thru: {card.expiryDate}</p>
        </div>
        <div>
          <p className="text-sm opacity-90">CVV: {card.cvv}</p>
        </div>
      </div>

      {/* Visa Logo */}
      <div className="absolute bottom-8 right-8">
        <svg
          width="59"
          height="20"
          viewBox="0 0 59 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5364 19.8517H22.9614L26.3372 0.356201H31.9122L28.5364 19.8517Z"
            fill="white"
          />
          <path
            d="M43.1079 0.833639C42.0524 0.416419 40.2997 0 38.1899 0C33.336 0 29.9602 2.49865 29.9432 6.03923C29.9092 8.65443 32.3767 10.0969 34.2143 10.9656C36.0853 11.8513 36.7067 12.4183 36.7067 13.1892C36.6897 14.3708 35.2933 14.9207 33.9985 14.9207C32.1444 14.9207 31.164 14.5882 29.6328 13.9216L28.9604 13.6221L28.2371 18.355C29.5149 18.9048 31.9144 19.3729 34.401 19.3899C39.5515 19.3899 42.8762 16.9249 42.9102 13.1554C42.9272 11.1009 41.622 9.53558 39.0194 8.20421C37.4799 7.35443 36.4487 6.80455 36.4657 5.99917C36.4657 5.2798 37.3626 4.52604 39.3444 4.52604C40.9687 4.48056 42.1634 4.8974 43.0433 5.33139L43.5292 5.56478L44.2525 1.016L43.1079 0.833639Z"
            fill="white"
          />
          <path
            d="M50.593 13.0592C51.0115 12.0234 52.7303 7.00448 52.7303 7.00448C52.7133 7.03869 53.1658 5.88829 53.4319 5.17892L53.7998 6.80438C53.7998 6.80438 54.832 12.1505 55.0302 13.0592C54.2219 13.0592 51.5655 13.0592 50.593 13.0592ZM57.4467 0.356201H53.1827C51.8879 0.356201 50.9059 0.671396 50.3012 2.01274L42.775 19.8517H48.3669C48.3669 19.8517 49.3053 17.1868 49.4864 16.6369C49.9897 16.6369 54.9281 16.6369 55.5835 16.6369C55.7474 17.3573 56.2338 19.8517 56.2338 19.8517H61.2246L57.4467 0.356201Z"
            fill="white"
          />
          <path
            d="M19.2348 0.356201L14.0858 13.736L13.5149 11.2373C12.5254 8.28662 9.52775 5.08802 6.19238 3.36706L10.9702 19.8347H16.5961L24.8607 0.356201H19.2348Z"
            fill="white"
          />
          <path
            d="M8.89355 0.356201H0.164936L0 0.74342C6.87649 2.52978 11.4229 6.53827 13.5146 11.2373L11.5669 2.02977C11.1995 0.705322 10.1762 0.373178 8.89355 0.356201Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
