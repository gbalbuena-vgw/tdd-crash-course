import { RandomService } from "./random";

export class DiceService {
  constructor(private readonly randomService: RandomService) {}

  d20() {
    return this.randomService.rand(20);
  }

  d12() {
    return this.randomService.rand(12);
  }

  d10() {
    return this.randomService.rand(10);
  }

  d8() {
    return this.randomService.rand(8);
  }

  d6() {
    return this.randomService.rand(6);
  }

  d4() {
    return this.randomService.rand(4);
  }

  d2() {
    return this.randomService.rand(2);
  }
}
