export class Product {
    constructor(readonly name: string, readonly expirationDate: Date, readonly price: number) {
    }

    isExpired(): Boolean {
        return this.expirationDate.getTime() < new Date().getTime()
    }
}

export const PRODUCTS = [
    new Product('ROTTEN TOMATO', new Date('1995-01-01'), 100),
    new Product('MAYONEISE', new Date('2021-02-05'), 267),
    new Product('RICE', new Date('2039-03-06'), 762),
    new Product('ALFAJORES RICARDO', new Date('2049-04-07'), 192),
]
