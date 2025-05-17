import { useState } from "react";
import { Transaction } from "../types";

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({
  transactions,
}: TransactionListProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Create a mock list of 4 transactions to match the screenshot
  const mockTransactions = [
    {
      id: "1",
      merchantName: "Hamleys",
      date: "20 May 2020",
      amount: 150,
      type: "refund",
      cardId: "1",
    },
    {
      id: "2",
      merchantName: "Hamleys",
      date: "20 May 2020",
      amount: 150,
      type: "charge",
      cardId: "1",
      icon: "plane",
    },
    {
      id: "3",
      merchantName: "Hamleys",
      date: "20 May 2020",
      amount: 150,
      type: "charge",
      cardId: "1",
      icon: "megaphone",
    },
    {
      id: "4",
      merchantName: "Hamleys",
      date: "20 May 2020",
      amount: 150,
      type: "charge",
      cardId: "1",
      icon: "receipt",
    },
  ];

  if (!transactions.length) {
    return <div className="text-center py-4">No transactions available</div>;
  }

  return (
    <div className="w-full rounded-xl overflow-hidden border">
      <div className="flex items-center justify-between p-6 bg-[#EDF3FF]">
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-[#325BAF] mr-3"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0078 1.28906H4.21875C3.51234 1.28906 2.9375 1.8639 2.9375 2.57031V3.85156H1.65625C0.949837 3.85156 0.375 4.4264 0.375 5.13281V15.4297C0.375 16.1361 0.949837 16.7109 1.65625 16.7109H13.4453C14.1517 16.7109 14.7266 16.1361 14.7266 15.4297V14.1484H16.0078C16.7142 14.1484 17.2891 13.5736 17.2891 12.8672V2.57031C17.2891 1.8639 16.7142 1.28906 16.0078 1.28906ZM13.4453 15.4297H1.65625V5.13281H13.4453V15.4297ZM16.0078 12.8672H14.7266V5.13281C14.7266 4.4264 14.1517 3.85156 13.4453 3.85156H4.21875V2.57031H16.0078V12.8672Z"
              fill="#325BAF"
            />
            <path
              d="M7.21875 9.5625H3.37598C3.02316 9.5625 2.73535 9.85031 2.73535 10.2031C2.73535 10.5559 3.02316 10.8437 3.37598 10.8437H7.21875C7.57157 10.8437 7.85938 10.5559 7.85938 10.2031C7.85938 9.85031 7.57157 9.5625 7.21875 9.5625Z"
              fill="#325BAF"
            />
            <path
              d="M11.7012 11.4844H3.37598C3.02316 11.4844 2.73535 11.7722 2.73535 12.125C2.73535 12.4778 3.02316 12.7656 3.37598 12.7656H11.7012C12.054 12.7656 12.3418 12.4778 12.3418 12.125C12.3418 11.7722 12.054 11.4844 11.7012 11.4844Z"
              fill="#325BAF"
            />
          </svg>
          <span className="font-medium text-[#0C365A]">
            Recent transactions
          </span>
        </div>
        <button
          onClick={handleToggle}
          className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#DFEAF2]"
          aria-expanded={isOpen}
          aria-controls="transactions-panel"
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
        <div id="transactions-panel" className="px-6">
          <div className="divide-y divide-gray-100">
            {mockTransactions.map((transaction, index) => {
              // Determine the icon based on the type or icon property
              let icon;
              let bgColor;

              if (transaction.type === "refund") {
                bgColor = "bg-[#EDF3FF]";
                icon = (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#EDF3FF" />
                    <path
                      d="M14.5 10H8V8H14.5C15.9 8 17 9.1 17 10.5C17 11.1 16.8 11.7 16.4 12.1L17.2 12.9C17.7 12.3 18 11.4 18 10.5C18 8.6 16.4 7 14.5 7H8C7.4 7 7 7.4 7 8V10C7 10.6 7.4 11 8 11H14.5C14.8 11 15 11.2 15 11.5C15 11.8 14.8 12 14.5 12H9C8.4 12 8 12.4 8 13C8 13.6 8.4 14 9 14H14.5C15.9 14 17 12.9 17 11.5C17 10.1 15.9 9 14.5 9V10Z"
                      fill="#325BAF"
                    />
                  </svg>
                );
              } else if (transaction.icon === "plane") {
                bgColor = "bg-[#E3FFF1]";
                icon = (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#E3FFF1" />
                    <path
                      d="M19.59 11.5C19.82 11.5 20 11.32 20 11.09V10.16C20 9.93 19.82 9.75 19.59 9.75H14.21L12.92 7.06C12.3 5.69 11.1 5 9.75 5H7.41C7.18 5 7 5.18 7 5.41V11.5H9.75V7.5H10.33C11.07 7.5 11.62 7.82 12 8.63L13.31 11.5H19.59Z"
                      fill="#01D167"
                    />
                    <path
                      d="M17.5 19C18.88 19 20 17.88 20 16.5C20 15.12 18.88 14 17.5 14C16.12 14 15 15.12 15 16.5C15 17.88 16.12 19 17.5 19ZM17.5 15.5C18.05 15.5 18.5 15.95 18.5 16.5C18.5 17.05 18.05 17.5 17.5 17.5C16.95 17.5 16.5 17.05 16.5 16.5C16.5 15.95 16.95 15.5 17.5 15.5Z"
                      fill="#01D167"
                    />
                    <path
                      d="M6.5 19C7.88 19 9 17.88 9 16.5C9 15.12 7.88 14 6.5 14C5.12 14 4 15.12 4 16.5C4 17.88 5.12 19 6.5 19ZM6.5 15.5C7.05 15.5 7.5 15.95 7.5 16.5C7.5 17.05 7.05 17.5 6.5 17.5C5.95 17.5 5.5 17.05 5.5 16.5C5.5 15.95 5.95 15.5 6.5 15.5Z"
                      fill="#01D167"
                    />
                  </svg>
                );
              } else if (transaction.icon === "megaphone") {
                bgColor = "bg-[#FFEBF0]";
                icon = (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#FFEBF0" />
                    <path
                      d="M18.4 6.89844C18.4 6.29844 17.9 5.89844 17.4 5.89844C17.1 5.89844 16.8 6.09844 16.7 6.29844L14.6 9.89844H12V8.89844C12 8.39844 11.6 7.89844 11 7.89844H9C8.5 7.89844 8 8.39844 8 8.89844V15.8984C8 16.3984 8.5 16.8984 9 16.8984H11C11.6 16.8984 12 16.3984 12 15.8984V14.8984H14.6L16.7 18.4984C16.8 18.6984 17.1 18.8984 17.4 18.8984C17.9 18.8984 18.4 18.4984 18.4 17.8984V6.89844Z"
                      fill="#FF4D4F"
                    />
                  </svg>
                );
              } else {
                bgColor = "bg-[#EDF3FF]";
                icon = (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#EDF3FF" />
                    <path
                      d="M18 3H6C4.3 3 3 4.3 3 6V18C3 19.7 4.3 21 6 21H18C19.7 21 21 19.7 21 18V6C21 4.3 19.7 3 18 3ZM19 18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V6C5 5.4 5.4 5 6 5H18C18.6 5 19 5.4 19 6V18Z"
                      fill="#325BAF"
                    />
                    <path
                      d="M16 10.9C16 10.4 15.6 10 15.1 10H8C7.4 10 7 10.4 7 11C7 11.6 7.4 12 8 12H12L7.4 16.6C7 17 7 17.6 7.4 18C7.8 18.4 8.4 18.4 8.8 18L14 12.8V16C14 16.6 14.4 17 15 17C15.6 17 16 16.6 16 16V10.9Z"
                      fill="#325BAF"
                    />
                  </svg>
                );
              }

              return (
                <div key={transaction.id} className="py-4 flex items-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mr-4`}
                  >
                    {icon}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-medium text-[#25345F]">
                      {transaction.merchantName}
                    </h4>
                    <p className="text-sm text-[#AAAAAA]">{transaction.date}</p>
                    <div className="mt-1 flex items-center">
                      <div className="w-6 h-6 bg-[#325BAF] rounded-full flex items-center justify-center mr-2">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.75 1.5H2.25C1.425 1.5 0.75 2.175 0.75 3V9C0.75 9.825 1.425 10.5 2.25 10.5H9.75C10.575 10.5 11.25 9.825 11.25 9V3C11.25 2.175 10.575 1.5 9.75 1.5ZM9.75 9H2.25V5.25H9.75V9ZM9.75 3.75H2.25V3H9.75V3.75Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-[#325BAF] font-medium">
                        {transaction.type === "refund"
                          ? "Refund on debit card"
                          : "Charged to debit card"}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p
                      className={`font-medium ${
                        transaction.type === "refund"
                          ? "text-[#01D167]"
                          : "text-black"
                      }`}
                    >
                      {transaction.type === "refund" ? "+" : "-"} S${" "}
                      {transaction.amount}
                    </p>
                    <svg
                      className="ml-auto mt-2"
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 1.53125L4.28125 5L0.5 8.46875L1.53125 9.5L6.53125 5L1.53125 0.5L0.5 1.53125Z"
                        fill="#DFEAF2"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="w-full bg-[#EDFBF5] py-4 mt-4 text-center">
        <button className="text-[#01D167] font-medium">
          View all card transactions
        </button>
      </div>
    </div>
  );
}
