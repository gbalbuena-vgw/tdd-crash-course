import supertest from "supertest";
import { PocCatService } from "../cat-service";
import { createServer } from "./api";

describe("api", () => {
  const catService = new PocCatService();
  const app = createServer(catService);

  test("request get", async () => {
    await supertest(app)
      .get("/cats/federico")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          favorites: ["carrots"],
          name: "federico",
        });
      });
  });
});
