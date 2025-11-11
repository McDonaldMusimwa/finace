export type Transanction = {
  date: Date;
  description: string;
  amount: number;

  credit?: number;
  debit?: number;
  balance: number;
};
