import { MathRandomService, CryptoRandomService } from './random';
import { DiceService } from './dice-service';

describe('math random dice', () => {
    const mathRandom = new MathRandomService();
    const mathRandomDiceService = new DiceService(mathRandom);
    testDiceService(mathRandomDiceService);
});

describe('crypto random dice', () => {
    const cryptoRandom = new CryptoRandomService();
    const mathRandomDiceService = new DiceService(cryptoRandom);
    testDiceService(mathRandomDiceService);
});

function testDiceService(diceService: DiceService) {
    test('1d20', () => {
        expect(diceService.d20()).toBeGreaterThanOrEqual(0);
        expect(diceService.d20()).toBeLessThanOrEqual(20);
    });
    
    test('1d12', () => {
        expect(diceService.d12()).toBeGreaterThanOrEqual(0);
        expect(diceService.d12()).toBeLessThanOrEqual(12);
    });
    
    test('1d10', () => {
        expect(diceService.d10()).toBeGreaterThanOrEqual(0);
        expect(diceService.d10()).toBeLessThanOrEqual(10);
    });
    
    test('1d8', () => {
        expect(diceService.d8()).toBeGreaterThanOrEqual(0);
        expect(diceService.d8()).toBeLessThanOrEqual(8);
    });
    
    test('1d6', () => {
        expect(diceService.d6()).toBeGreaterThanOrEqual(0);
        expect(diceService.d6()).toBeLessThanOrEqual(6);
    });
    
    test('1d4', () => {
        expect(diceService.d4()).toBeGreaterThanOrEqual(0);
        expect(diceService.d4()).toBeLessThanOrEqual(4);
    });
    
    test('1d2', () => {
        expect(diceService.d2()).toBeGreaterThanOrEqual(0);
        expect(diceService.d2()).toBeLessThanOrEqual(2);
    });
}
