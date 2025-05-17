import { useState } from "react";

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCard: (name: string) => void;
}

export default function AddCardModal({
  isOpen,
  onClose,
  onAddCard,
}: AddCardModalProps) {
  const [cardName, setCardName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cardName.trim()) {
      setError("Card name is required");
      return;
    }

    onAddCard(cardName);
    setCardName("");
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/15 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 overflow-hidden shadow-xl">
        <div className="flex justify-between items-center p-6 pb-4">
          <h2 className="text-xl font-medium text-[#0C365A]">Add New Card</h2>
          <button
            onClick={onClose}
            className="text-gray-400"
            aria-label="Close modal"
            tabIndex={0}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 3.5L3.5 12.5"
                stroke="#AAAAAA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 12.5L3.5 3.5"
                stroke="#AAAAAA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 pb-6">
          <div className="mb-6">
            <label
              htmlFor="cardName"
              className="block text-sm font-medium text-[#0C365A] mb-2"
            >
              Card Name
            </label>
            <input
              type="text"
              id="cardName"
              value={cardName}
              onChange={(e) => {
                setCardName(e.target.value);
                setError("");
              }}
              className={`w-full px-4 py-3 border text-black ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-[#325BAF]`}
              placeholder="Enter card name"
              tabIndex={0}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-sm font-medium text-[#325BAF] bg-white border border-gray-200 rounded-md hover:bg-gray-50 focus:outline-none"
              tabIndex={0}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-[#325BAF] rounded-md hover:bg-blue-700 focus:outline-none"
              tabIndex={0}
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
