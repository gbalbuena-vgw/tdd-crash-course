import { Pool } from 'pg';

const SELECT_BY_ID = `select name, favorites from dogs where dogs.id = $1 order by dogs.id desc limit 1`;
const INSERT_DOG = `insert into dogs (name) values ($1);`;

type Dog = {
    name: string;
}

interface DogsRepository {
    last(name: string): Promise<Dog | undefined> ;
    createOrUpdate(dog: Dog): void;
}

export class DogsPostgresRepository implements DogsRepository {
  constructor(private readonly pgPool: Pool) {
    this.terminateHooks();
  }

  async last(dogName: string): Promise<Dog | undefined>  {
    const result = await this.pgPool.query({
      text: SELECT_BY_ID,
      values: [dogName]
    });
    return result.rows.length > 0 ? (result.rows[0] as Dog) : undefined;
  }

  async createOrUpdate(dog: Dog) {
    const last = await this.last(dog.name);
    
    await this.pgPool.query({
      text: INSERT_DOG,
      values: [dog.name]
    });
  }

  private terminateHooks() {
    function shutdownHandler(options: any, exitCode: number) {}

    process.on('exit', shutdownHandler.bind(null, { cleanup: true })); // for when app is closing
    process.on('SIGINT', shutdownHandler.bind(null, { exit: true })); // catch ctrl+c event
    // catch "kill pid" (for example: nodemon restart)
    process.on('SIGUSR1', shutdownHandler.bind(null, { exit: true }));
    process.on('SIGUSR2', shutdownHandler.bind(null, { exit: true }));
    // catch uncaught exceptions
    process.on('uncaughtException', shutdownHandler.bind(null, { exit: true }));
  }
}