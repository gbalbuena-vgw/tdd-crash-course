import { DatabaseError, Pool, PoolConfig } from "pg";
import { DogsPostgresRepository } from "./dog-repository";

// setup for to mock pg
const mPool = {
  connect: function () {
    return { query: jest.fn() };
  },
  query: jest.fn(),
  end: jest.fn(),
  on: jest.fn(),
};
jest.mock("pg", () => {
  return { Pool: jest.fn(() => mPool) };
});

describe("transaction postgres repository", () => {
  const pool = new Pool({} as PoolConfig);
  const repo = new DogsPostgresRepository(pool);

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Given last, When dog name exist, Then returns result", async () => {
    mPool.query.mockResolvedValue({ rows: [] });

    await repo.last("Sofia");
    expect(mPool.query).toHaveBeenCalledWith({
      text: `select name, favorites from dogs where dogs.id = $1 order by dogs.id desc limit 1`,
      values: ["Sofia"],
    });
  });

  test("Given write, When transaction event, Then prepare expected insert", async () => {
    mPool.query.mockResolvedValue({ rows: [] });

    await repo.create({ name: "Juan" });
    expect(mPool.query).toHaveBeenCalledWith({
      text: `insert into dogs (name) values ($1);`,
      values: ["Juan"],
    });
  });

  test("Given a duplicated dog name, When transaction event, Then expect already created exception", async () => {
    mPool.query.mockResolvedValue({ rows: [{ name: "Juan" }] });

    expect(repo.create({ name: "Juan" })).rejects.toMatchObject({
      message: "DogAlreadyExistError: Juan already exist, try another name",
    });
  });

  test("just throw an error", async () => {
    mPool.query.mockRejectedValueOnce(
      new Error("Something went wrong") as DatabaseError
    );
    expect(repo.last("Sofia")).rejects.toMatchObject({
      message: "Something went wrong",
    });
  });
});
