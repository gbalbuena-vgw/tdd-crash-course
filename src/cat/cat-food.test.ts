import { findCatFavoriteFood } from './cat-food';

test('given cat carlos, when I ask for favorite food, returns fish', () => {
    expect(findCatFavoriteFood('carlos')).toEqual(['fish']);
});


test('given cat federico, when I ask for favorite food, returns fish', () => {
    expect(findCatFavoriteFood('federico')).toEqual(['carrots']);
});


