export type TransactionEvent = {
    walletId: string;
    transactionId: string;
    transactionType: 'credit' | 'debit';
    amount: number;
};