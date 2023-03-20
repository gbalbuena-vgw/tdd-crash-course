import { hello123 } from './hello-123';

test('hello123 should return expected value', async () => {
    expect(await hello123('hello')).toEqual([ 'hello 1', 'hello 2', 'hello 3']);
});

test('hello123 should throw error', async () => {
    expect.assertions(1);
    await expect(hello123('boom!')).rejects.toMatch('boom!!!!');
});
