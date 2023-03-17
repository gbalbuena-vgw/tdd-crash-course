import { PRODUCTS, Product } from './Product';

jest
  .useFakeTimers()
  .setSystemTime(new Date('2020-01-01'));

test('Given a product, when is expired, then true otherwise false', () => {
    // make sure time mock is working
    expect(new Date().getTime()).toEqual(1577836800000);

    expect(PRODUCTS[0].name).toEqual('ROTTEN TOMATO');
    expect(PRODUCTS[0].isExpired()).toBeTruthy();

    expect(PRODUCTS[1].name).toEqual('MAYONEISE');
    expect(PRODUCTS[1].isExpired()).toBeFalsy();

    expect(PRODUCTS[2].name).toEqual('RICE');
    expect(PRODUCTS[2].isExpired()).toBeFalsy()

    expect(PRODUCTS[3].name).toEqual('ALFAJORES RICARDO');
    expect(PRODUCTS[3].isExpired()).toBeFalsy();
});
