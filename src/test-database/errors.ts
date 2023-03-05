export class DogAlreadyExistError extends Error {
  constructor(dogName: string) {
    super(`DogAlreadyExistError: ${dogName} already exist, try another name`);
  }
}
