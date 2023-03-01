import testData from "./data/test.json";
import { MyCatService } from "./cat-service";
import { PocCatService } from "./cat-service";

describe('poc', () => {
  const service = new PocCatService();
  test("given carlos, when I ask for favorite food, returns fish", () => {
    expect(service.getByName("carlos")).toEqual({
      favorites: ["fish"],
      name: "carlos",
    });
  });
  
  test("given federico, when I ask for favorite food, returns fish", () => {
    expect(service.getByName("federico")).toEqual({
      favorites: ["carrots"],
      name: "federico",
    });
  });
});

describe('my service', () => {
  const service = new MyCatService(testData);

  test("Juan likes Hot dogs and pasta", () => {
    expect(service.getByName("Juan")).toEqual({
      favorites: ["Hot Dogs", "Pasta"],
      name: "Juan",
    });
  });
});
