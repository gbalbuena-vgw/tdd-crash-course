import { Player } from "./player";

export class Game {
    constructor(private readonly players: Player[]) {
        
    }

    getPlayers() {
        return this.players.map(p => p.getName());
    }
}