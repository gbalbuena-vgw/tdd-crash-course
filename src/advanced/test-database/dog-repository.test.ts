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
      text: `select name, hobbies from dogs where dogs.id = $1 order by dogs.id desc limit 1;`,
      values: ["Sofia"],
    });
  });

  test("Given new dog, When create, Then prepare expected insert", async () => {
    mPool.query.mockResolvedValue({ rows: [] });

    await repo.create({
      name: "Juan",
      hobbies: ["Walks", "Eating", "Fishing"],
    });
    expect(mPool.query.mock.calls).toEqual([
      [
        {
          text: "select name, hobbies from dogs where dogs.id = $1 order by dogs.id desc limit 1;",
          values: ["Juan"],
        },
      ],
      [
        {
          text: "insert into dogs (name, hobbies) values ($1, $2);",
          values: ["Juan", ["Walks", "Eating", "Fishing"]],
        },
      ],
    ]);
  });

  test("Given a dog name, When duplicated, Then throw DogAlreadyExistError", async () => {
    mPool.query.mockResolvedValue({ rows: [{ name: "Juan" }] });

    expect(
      repo.create({ name: "Juan", hobbies: ["Walks", "Eating", "Fishing"] })
    ).rejects.toMatchObject({
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
