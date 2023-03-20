export { MathRandomService } from './math-random-service';
export { CryptoRandomService } from './crypto-random-service';

export interface RandomService {
  rand(sides: number): number;
}
