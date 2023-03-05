export type Cat = {
  name: string;
  favorites: string[];
};

export interface CatService {
  /**
   * returns cat if exist otherwise undefined
   * @param name
   */
  getByName(name: string): Cat | undefined;
}

export class MyCatService implements CatService {
  constructor(private readonly data: Cat[]) {}

  getByName(name: string) {
    return this.data.find((el) => el.name === name);
  }
}

export class PocCatService implements CatService {
  constructor() {}

  getByName(name: string) {
    if (name == "carlos") {
      return { name, favorites: ["fish"] };
    }

    return { name, favorites: ["carrots"] };
  }
}
