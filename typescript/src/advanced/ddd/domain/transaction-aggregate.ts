import { WalletNotFoundError } from './errors';
import { TransactionEvent } from './transaction-event';

export class TransactionAggregate {
    constructor(readonly repo: TransactionEvent[]) {        
    }

    credit(walletId: string, transactionId: string, amount: number) {
        this.repo.push({
            walletId,
            transactionId,
            amount,
            transactionType: 'credit'
        });
    }
    
    debit(walletId: string, transactionId: string, amount: number) {
        this.repo.push({
            walletId,
            transactionId,
            amount,
            transactionType: 'debit'
        });
    }
    
    // extracted outside the aggregate
    balance(walletId: string) {
        const txByWalletId = this.repo.filter(tx => walletId === tx.walletId);
    
        if (txByWalletId.length === 0) {
            throw new WalletNotFoundError(walletId);
        }
    
        let balance = 0;
        txByWalletId.forEach(tx => {
            switch (tx.transactionType) {
                case ('credit'):
                    balance += tx.amount
                    break;
                case ('debit'):
                    balance -= tx.amount
                    break;
            }
        });
        return balance;
    }
}
