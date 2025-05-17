"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MobileNavigation from "./components/MobileNavigation";
import CardCarousel from "./components/CardCarousel";
import CardDetails from "./components/CardDetails";
import TransactionList from "./components/TransactionList";
import AddCardModal from "./components/AddCardModal";
import { DebitCard, Transaction, AccountData } from "./types";
import {
  getCards,
  addCard,
  toggleCardFreeze,
  getTransactions,
  getAccountData,
} from "./services/cardService";
import CardActions from "./components/CardActions";

export default function Home() {
  const [cards, setCards] = useState<DebitCard[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [accountData, setAccountData] = useState<AccountData | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    // Load cards from API
    getCards().then((fetchedCards) => {
      setCards(fetchedCards);
    });

    // Load transactions
    getTransactions().then((fetchedTransactions) => {
      setTransactions(fetchedTransactions);
    });

    // Load account data
    getAccountData().then((data) => {
      setAccountData(data);
    });
  }, []);

  const handleAddCard = (name: string) => {
    addCard(name).then((newCard) => {
      setCards((prevCards) => [...prevCards, newCard]);
      setCurrentCardIndex(cards.length);
    });
  };

  const handleFreezeCard = (cardId: string) => {
    toggleCardFreeze(cardId).then((updatedCard) => {
      setCards((prevCards) =>
        prevCards.map((card) => (card.id === cardId ? updatedCard : card))
      );
    });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white/[0.99]">
      <Sidebar />

      <div className="md:ml-64 pb-16 md:pb-0">
        <main className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          {/* Account Balance Section */}
          <div className="mb-6">
            <h1 className="text-xl font-medium mb-4 text-gray-700">
              Available balance
            </h1>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="bg-[#01D167] text-white px-3 py-1 rounded-md mr-3">
                  <span className="font-medium">{accountData?.currency}</span>
                </div>
                <span className="text-4xl font-bold text-gray-800">
                  {accountData?.balance.toLocaleString()}
                </span>
              </div>

              <button
                onClick={handleOpenModal}
                className="flex items-center bg-[#325BAF] text-white font-medium px-5 py-3 rounded-lg"
                aria-label="Add a new card"
                tabIndex={0}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                    fill="currentColor"
                  />
                </svg>
                New card
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex gap-8 border-b border-gray-200">
              <button
                onClick={() => setTabIndex(0)}
                className={`py-3 pb-4 relative ${
                  tabIndex === 0
                    ? "text-[#0C365A] font-medium"
                    : "text-[#AAAAAA]"
                }`}
                aria-label="View my debit cards"
                tabIndex={0}
              >
                My debit cards
                {tabIndex === 0 && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#01D167]"></div>
                )}
              </button>
              <button
                onClick={() => setTabIndex(1)}
                className={`py-3 pb-4 relative ${
                  tabIndex === 1
                    ? "text-[#0C365A] font-medium"
                    : "text-[#AAAAAA]"
                }`}
                aria-label="View all company cards"
                tabIndex={0}
              >
                All company cards
                {tabIndex === 1 && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#01D167]"></div>
                )}
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 bg-white p-8 rounded-lg shadow-sm">
            {/* Left Column */}
            <div className="w-full lg:w-[55%]">
              {/* Card Carousel */}
              <div className="bg-white rounded-lg mb-6">
                {cards.length > 0 && (
                  <CardCarousel
                    cards={cards}
                    currentCardIndex={currentCardIndex}
                    setCurrentCardIndex={setCurrentCardIndex}
                  />
                )}
              </div>

              {/* Card Actions */}
              <div className="bg-white rounded-lg">
                {cards.length > 0 && (
                  <CardActions
                    currentCard={cards[currentCardIndex]}
                    onFreezeCard={handleFreezeCard}
                  />
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-[45%]">
              {/* Card Details */}
              <div className="bg-white rounded-lg mb-6">
                {cards.length > 0 && (
                  <CardDetails currentCard={cards[currentCardIndex]} />
                )}
              </div>

              {/* Transactions */}
              <div className="bg-white rounded-lg">
                <TransactionList transactions={transactions} />
              </div>
            </div>
          </div>
        </main>
      </div>

      <MobileNavigation />

      {/* Add Card Modal */}
      <AddCardModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddCard={handleAddCard}
      />
    </div>
  );
}
