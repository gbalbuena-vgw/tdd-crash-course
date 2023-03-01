export class Creature {
  constructor(
    /**
     * The name of the creature used as identity
     */
    public name: string,
    /**
     * Armor protects its wearer from ATTACKS. The armor (and shield) you wear determines your base Armor Class.
     */
    public armorClass: number,
    /**
     * hit points (or HP) measure a character's physical health and vitality. An unscathed character is at their maximum hit points. During battle, characters lose hit points. When reduced to 0 hit points, characters are incapacitated or killed. Characters can regain hit points with healing potions, magic spells, or by rolling hit dice when resting.
     */
    public hitPoints: number = 10,
  ) {}
}
