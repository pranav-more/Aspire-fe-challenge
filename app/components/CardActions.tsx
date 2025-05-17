import { DebitCard } from "../types";

interface CardActionsProps {
  currentCard: DebitCard;
  onFreezeCard: (cardId: string) => void;
}

export default function CardActions({
  currentCard,
  onFreezeCard,
}: CardActionsProps) {
  const handleFreezeToggle = () => {
    onFreezeCard(currentCard.id);
  };

  return (
    <div className="w-full p-6 bg-[#EDF3FF] rounded-xl">
      <div className="grid grid-cols-5 gap-4 justify-items-center">
        {/* Freeze Card */}
        <button
          onClick={handleFreezeToggle}
          className="flex flex-col items-center space-y-2"
          aria-label={currentCard.frozen ? "Unfreeze card" : "Freeze card"}
          tabIndex={0}
        >
          <div className="w-12 h-12 rounded-full bg-[#325BAF] flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-center text-sm font-medium text-[#0C365A]">
            Freeze
          </span>
          <span className="text-center text-sm font-medium text-[#0C365A] -mt-2">
            card
          </span>
        </button>

        {/* Set Spend Limit */}
        <button
          className="flex flex-col items-center space-y-2"
          aria-label="Set spend limit"
          tabIndex={0}
        >
          <div className="w-12 h-12 rounded-full bg-[#325BAF] flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-center text-sm font-medium text-[#0C365A]">
            Set spend
          </span>
          <span className="text-center text-sm font-medium text-[#0C365A] -mt-2">
            limit
          </span>
        </button>

        {/* Add to GPay */}
        <button
          className="flex flex-col items-center space-y-2"
          aria-label="Add to GPay"
          tabIndex={0}
        >
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="-3 0 262 262"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              />
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              />
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              />
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              />
            </svg>
          </div>
          <span className="text-center text-sm font-medium text-[#0C365A]">
            Add to
          </span>
          <span className="text-center text-sm font-medium text-[#0C365A] -mt-2">
            GPay
          </span>
        </button>

        {/* Replace Card */}
        <button
          className="flex flex-col items-center space-y-2"
          aria-label="Replace card"
          tabIndex={0}
        >
          <div className="w-12 h-12 rounded-full bg-[#325BAF] flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-center text-sm font-medium text-[#0C365A]">
            Replace
          </span>
          <span className="text-center text-sm font-medium text-[#0C365A] -mt-2">
            card
          </span>
        </button>

        {/* Cancel Card */}
        <button
          className="flex flex-col items-center space-y-2"
          aria-label="Cancel card"
          tabIndex={0}
        >
          <div className="w-12 h-12 rounded-full bg-[#325BAF] flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-center text-sm font-medium text-[#0C365A]">
            Cancel
          </span>
          <span className="text-center text-sm font-medium text-[#0C365A] -mt-2">
            card
          </span>
        </button>
      </div>
    </div>
  );
}
