import { TransactionAggregate, errors } from './domain';
import { data } from './repository';

const walletId='123', transactionId='tx1';

const agg = new TransactionAggregate(data)

test('given credit, when +1, then balance = 1', () => {
    agg.credit(walletId, transactionId, 1);
    expect(agg.balance(walletId)).toEqual(1);
});

test('given debit, when -1, then balance = 0', () => {
    agg.debit(walletId, transactionId, 1);
    expect(agg.balance(walletId)).toEqual(0);
});

test('given balance, when does not exist, then throw exception', () => {
    expect(() => agg.balance('unknown')).toThrow(errors.WalletNotFoundError);
});
