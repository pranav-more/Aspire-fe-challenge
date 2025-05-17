import { DebitCard, Transaction, AccountData } from "../types";

// Helper to generate random card number
const generateCardNumber = (): string => {
  return Array(4)
    .fill(0)
    .map(() =>
      Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0")
    )
    .join(" ");
};

// Helper to generate expiry date 3 years from now
const generateExpiryDate = (): string => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 3);
  return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date
    .getFullYear()
    .toString()
    .slice(-2)}`;
};

// Initial mock data
const mockCards: DebitCard[] = [
  {
    id: "1",
    name: "Mark Henry",
    cardNumber: "4456 7890 1234 2020",
    expiryDate: "12/20",
    cvv: "***",
    frozen: false,
    cardType: "visa",
  },
];

const mockTransactions: Transaction[] = [
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
  },
  {
    id: "3",
    merchantName: "Hamleys",
    date: "20 May 2020",
    amount: 150,
    type: "charge",
    cardId: "1",
  },
];

const mockAccountData: AccountData = {
  balance: 3000,
  currency: "S$",
};

// Mock API endpoints

export const getCards = (): Promise<DebitCard[]> => {
  // Get cards from localStorage or use initial mock data
  const storedCards = localStorage.getItem("aspire_cards");
  const cards = storedCards ? JSON.parse(storedCards) : mockCards;

  if (!storedCards) {
    localStorage.setItem("aspire_cards", JSON.stringify(mockCards));
  }

  return Promise.resolve(cards);
};

export const addCard = (name: string): Promise<DebitCard> => {
  const newCard: DebitCard = {
    id: Date.now().toString(),
    name,
    cardNumber: generateCardNumber(),
    expiryDate: generateExpiryDate(),
    cvv: "***",
    frozen: false,
    cardType: "visa",
  };

  // Get current cards
  const currentCards = JSON.parse(localStorage.getItem("aspire_cards") || "[]");
  const updatedCards = [...currentCards, newCard];

  // Save to localStorage
  localStorage.setItem("aspire_cards", JSON.stringify(updatedCards));

  return Promise.resolve(newCard);
};

export const toggleCardFreeze = (cardId: string): Promise<DebitCard> => {
  // Get current cards
  const currentCards = JSON.parse(localStorage.getItem("aspire_cards") || "[]");

  // Find and update the target card
  const updatedCards = currentCards.map((card: DebitCard) => {
    if (card.id === cardId) {
      return { ...card, frozen: !card.frozen };
    }
    return card;
  });

  // Save to localStorage
  localStorage.setItem("aspire_cards", JSON.stringify(updatedCards));

  // Return the updated card
  const updatedCard = updatedCards.find(
    (card: DebitCard) => card.id === cardId
  );
  return Promise.resolve(updatedCard);
};

export const getTransactions = (): Promise<Transaction[]> => {
  const storedTransactions = localStorage.getItem("aspire_transactions");
  const transactions = storedTransactions
    ? JSON.parse(storedTransactions)
    : mockTransactions;

  if (!storedTransactions) {
    localStorage.setItem(
      "aspire_transactions",
      JSON.stringify(mockTransactions)
    );
  }

  return Promise.resolve(transactions);
};

export const getAccountData = (): Promise<AccountData> => {
  return Promise.resolve(mockAccountData);
};
