# Aspire Card Management App

A responsive web application for managing debit cards inspired by the Aspire application. This project was built as part of the Aspire FE Code Challenge.

## Features

- View account balance and existing cards
- Add new debit cards with random card numbers and expiration dates
- Freeze/unfreeze cards
- View transaction history
- Responsive design for desktop and mobile

## Technologies Used

- Next.js 15 (React 19)
- TypeScript
- Tailwind CSS v4
- LocalStorage for data persistence

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### View Cards

- On startup, you'll see a default card already loaded
- Navigate through multiple cards using the dot navigation below the card

### Add New Card

1. Click the "New card" button at the top right
2. Enter a name for the card in the modal
3. Submit the form
4. The card will be added to your collection with a randomly generated card number and expiration date

### Freeze/Unfreeze Card

- Click the "Freeze card" button below the card to freeze it
- When a card is frozen, it will appear slightly transparent
- The button will toggle to "Unfreeze card" when the card is frozen

### View Card Details

- Click on the "Card details" section to view more details about the card

### View Transactions

- Scroll down to see the recent transactions for the currently selected card

## Project Structure

```
app/
├── components/        # React components
│   ├── AddCardModal.tsx
│   ├── CardActions.tsx
│   ├── CardCarousel.tsx
│   ├── CardDetails.tsx
│   ├── DebitCard.tsx
│   ├── MobileNavigation.tsx
│   ├── Sidebar.tsx
│   └── TransactionList.tsx
├── services/          # Service functions
│   └── cardService.ts
├── types.ts           # TypeScript interfaces
├── globals.css        # Global styles
├── layout.tsx         # Root layout component
└── page.tsx           # Main page component
```

## Improvements and Future Work

- Add unit and integration tests
- Implement proper state management with Redux or Context API
- Add form validation for the add card modal
- Implement more card actions (e.g., set spend limit, cancel card)
- Add animations for better UX
- Add more responsive features for mobile view
# Aspire-fe-challenge
