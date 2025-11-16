// Example 1: Simple Bank Statement (Checking Account)
export const statement1 = [
  {
    bankName: "First National Bank (FNB)",
    ownerFirstName: "Alice",
    ownerLastName: "Smith",
    periodStart: new Date("2024-03-01T00:00:00Z"),
    periodEnd: new Date("2024-03-31T23:59:59Z"),
    currency: "USD",
    transactions: [
      {
        date: new Date("2024-03-05T10:00:00Z"),
        description: "Salary Deposit",
        amount: 4500.0,
        credit: 4500.0,
        balance: 5500.0,
      },
      {
        date: new Date("2024-03-10T15:30:00Z"),
        description: "Grocery Store Purchase",
        amount: -150.5,
        debit: 150.5,
        balance: 5349.5,
      },
      {
        date: new Date("2024-03-15T08:00:00Z"),
        description: "Monthly Rent Payment",
        amount: -1500.0,
        debit: 1500.0,
        balance: 3849.5,
      },
    ],
  },

  // Example 2: More Complex Statement (Savings Account)
  {
    bankName: "City Credit Union",
    ownerFirstName: "Robert",
    ownerLastName: "Jones",
    periodStart: new Date("2024-04-01T00:00:00Z"),
    periodEnd: new Date("2024-04-30T23:59:59Z"),
    currency: "EUR",
    transactions: [
      {
        date: new Date("2024-04-01T00:00:00Z"),
        description: "Opening Balance",
        amount: 0,
        balance: 12450.75, // Starting balance is the first transaction's balance
      },
      {
        date: new Date("2024-04-12T11:45:00Z"),
        description: "Interest Earned",
        amount: 15.25,
        credit: 15.25,
        balance: 12466.0,
      },
      {
        date: new Date("2024-04-20T17:10:00Z"),
        description: "Transfer to Checking Account",
        amount: -1000.0,
        debit: 1000.0,
        balance: 11466.0,
      },
    ],
  },
];

//console.log(statement1);
