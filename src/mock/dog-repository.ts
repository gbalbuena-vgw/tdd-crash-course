import { Pool } from "pg";
import { DogAlreadyExistError } from "./errors";

type Dog = {
  name: string;
  hobbies: string[];
};

interface DogsRepository {
  last(name: string): Promise<Dog | undefined>;
  create(dog: Dog): void;
}

const SELECT_BY_ID = `select name, hobbies from dogs where dogs.id = $1 order by dogs.id desc limit 1;`;
const INSERT_DOG = `insert into dogs (name, hobbies) values ($1, $2);`;

export class DogsPostgresRepository implements DogsRepository {
  constructor(private readonly pgPool: Pool) {
    this.terminateHooks();
  }

  async last(dogName: string): Promise<Dog | undefined> {
    const result = await this.pgPool.query({
      text: SELECT_BY_ID,
      values: [dogName],
    });
    return result.rows.length > 0 ? (result.rows[0] as Dog) : undefined;
  }

  async create(dog: Dog) {
    const last = await this.last(dog.name);

    if (last) {
      throw new DogAlreadyExistError(dog.name);
    }

    await this.pgPool.query({
      text: INSERT_DOG,
      values: [dog.name, dog.hobbies],
    });
  }

  private terminateHooks() {
    function shutdownHandler(options: any, exitCode: number) {}

    process.on("exit", shutdownHandler.bind(null, { cleanup: true })); // for when app is closing
    process.on("SIGINT", shutdownHandler.bind(null, { exit: true })); // catch ctrl+c event
    // catch "kill pid" (for example: nodemon restart)
    process.on("SIGUSR1", shutdownHandler.bind(null, { exit: true }));
    process.on("SIGUSR2", shutdownHandler.bind(null, { exit: true }));
    // catch uncaught exceptions
    process.on("uncaughtException", shutdownHandler.bind(null, { exit: true }));
  }
}
