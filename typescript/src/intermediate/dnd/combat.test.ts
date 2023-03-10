import { Combat, Creature } from ".";

const attacker = new Creature("Orc", 13, 10);
const defender = new Creature("Adventurer", 15, 10);
const combat = new Combat(attacker, defender, 4, { numDice: 1, numSides: 8 });

test("Given Orc attacks Adventurer, Then should produce some damage", () => {
  const result = combat.fight();
  expect(result.attackerName).toEqual("Orc");
  expect(result.defenderName).toEqual("Adventurer");
  expect(result.attackerRoll).toBeGreaterThanOrEqual(5); // Minimum possible roll is 1 + 4 (attacker's attack bonus)
  expect(result.attackerRoll).toBeLessThanOrEqual(24); // Maximum possible roll is 20 + 4 (attacker's attack bonus)
  expect(result.attackSucceeded).toBeDefined();
  expect(result.damageDealt).toBeDefined();
  expect(result.defenderHP).toBeDefined();
});

test("reset method should reset hit points of creatures", () => {
  combat.getAttacker().hitPoints = 5;
  combat.getDefender().hitPoints = 3;
  combat.reset();
  expect(combat.getAttacker().hitPoints).toEqual(10);
  expect(combat.getDefender().hitPoints).toEqual(10);
});

test("getWinner method should return correct winner", () => {
  combat.getAttacker().hitPoints = 3;
  combat.getDefender().hitPoints = 0;
  expect(combat.getWinner()).toEqual(combat.getAttacker());

  combat.getAttacker().hitPoints = 0;
  combat.getDefender().hitPoints = 2;
  expect(combat.getWinner()).toEqual(combat.getDefender());

  combat.getAttacker().hitPoints = 0;
  combat.getDefender().hitPoints = 0;
  expect(combat.getWinner()).toBeNull();
});
