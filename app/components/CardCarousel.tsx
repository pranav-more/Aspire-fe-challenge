import {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
  TouchEvent,
} from "react";
import { DebitCard as DebitCardType } from "../types";
import DebitCard from "./DebitCard";

interface CardCarouselProps {
  cards: DebitCardType[];
  currentCardIndex: number;
  setCurrentCardIndex: Dispatch<SetStateAction<number>>;
}

export default function CardCarousel({
  cards,
  currentCardIndex,
  setCurrentCardIndex,
}: CardCarouselProps) {
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide functionality
  useEffect(() => {
    // Only auto-slide when there are multiple cards and user is not interacting
    if (cards.length > 1 && !isUserInteracting) {
      autoSlideTimerRef.current = setInterval(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 8000);
    }

    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, [cards.length, isUserInteracting, setCurrentCardIndex]);

  // Reset the user interaction state after a delay
  useEffect(() => {
    if (isUserInteracting) {
      const timer = setTimeout(() => {
        setIsUserInteracting(false);
      }, 5000); // Reset after 5 seconds of no interaction

      return () => clearTimeout(timer);
    }
  }, [isUserInteracting]);

  const handleDotClick = (index: number) => {
    setIsUserInteracting(true);
    setCurrentCardIndex(index);
  };

  const toggleShowCardNumber = () => {
    setShowCardNumber((prev) => !prev);
  };

  // Handle swipe gestures
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsUserInteracting(true);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Next card
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    } else if (isRightSwipe) {
      // Previous card
      setCurrentCardIndex((prevIndex) =>
        prevIndex === 0 ? cards.length - 1 : prevIndex - 1
      );
    }

    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!cards.length) {
    return <div className="text-center py-10">No cards available</div>;
  }

  return (
    <div className="w-full flex flex-col">
      {/* Show Card Number Button */}
      <div className="self-end mb-4">
        <button
          onClick={toggleShowCardNumber}
          className="flex items-center text-[#01D167] font-medium"
          aria-label={showCardNumber ? "Hide card number" : "Show card number"}
          tabIndex={0}
        >
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
              fill="currentColor"
            />
          </svg>
          {showCardNumber ? "Hide card number" : "Show card number"}
        </button>
      </div>

      {/* Card */}
      <div
        className="flex justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <DebitCard
          index={currentCardIndex}
          card={cards[currentCardIndex]}
          showCardNumber={showCardNumber}
        />
      </div>

      {/* Navigation Dots */}
      {cards.length > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentCardIndex ? "bg-[#01D167]" : "bg-gray-300"
              }`}
              aria-label={`Go to card ${index + 1}`}
              tabIndex={0}
            />
          ))}
        </div>
      )}
    </div>
  );
}
