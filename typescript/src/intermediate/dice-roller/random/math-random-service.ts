import { RandomService } from ".";

export class MathRandomService implements RandomService {
  rand(n: number) {
    return Math.floor(Math.random() * n);
  }
}
