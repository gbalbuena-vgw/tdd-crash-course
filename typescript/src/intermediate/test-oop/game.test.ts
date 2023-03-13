import { Player } from './player';
import { Game } from './game';

test('Given a game, when set player, then get player names', () => {
    const p1 = new Player('Player One');
    const p2 = new Player('Player Two');
    const game = new Game([p1, p2]);
    expect(game.getPlayers()).toEqual(['Player One', 'Player Two']);
})
