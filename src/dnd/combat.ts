import { DamageRoll } from "./damage-roll";
import { Creature } from "./creature";

export class Combat {
  constructor(
    private readonly attacker: Creature,
    private readonly defender: Creature,
    private readonly attackerAttackBonus: number,
    private readonly attackerDamageRoll: DamageRoll
  ) {}

  getAttacker(): Creature {
    return this.attacker;
  }

  getDefender(): Creature {
    return this.defender;
  }

  fight(): {
    attackerName: string;
    defenderName: string;
    attackerRoll: number;
    attackSucceeded: boolean;
    damageDealt: number;
    defenderHP: number;
  } {
    const attackerRoll =
      Math.floor(Math.random() * 20) + 1 + this.attackerAttackBonus;
    const attackSucceeded = attackerRoll >= this.defender.armorClass;
    let damageDealt = 0;
    if (attackSucceeded) {
      for (let i = 0; i < this.attackerDamageRoll.numDice; i++) {
        damageDealt +=
          Math.floor(Math.random() * this.attackerDamageRoll.numSides) + 1;
      }
    }
    this.defender.hitPoints -= damageDealt;
    const result = {
      attackerName: this.attacker.name,
      defenderName: this.defender.name,
      attackerRoll,
      attackSucceeded,
      damageDealt,
      defenderHP: this.defender.hitPoints,
    };
    return result;
  }

  reset(): void {
    this.attacker.hitPoints = 10;
    this.defender.hitPoints = 10;
  }

  getWinner(): Creature | null {
    if (this.attacker.hitPoints <= 0 && this.defender.hitPoints <= 0) {
      return null;
    } else if (this.attacker.hitPoints <= 0) {
      return this.defender;
    } else if (this.defender.hitPoints <= 0) {
      return this.attacker;
    } else {
      return null;
    }
  }
}
