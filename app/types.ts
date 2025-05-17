export interface DebitCard {
  id: string;
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  frozen: boolean;
  cardType: "visa" | "mastercard";
}

export interface Transaction {
  id: string;
  merchantName: string;
  date: string;
  amount: number;
  type: "charge" | "refund";
  cardId: string;
}

export interface AccountData {
  balance: number;
  currency: string;
}
