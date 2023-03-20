import crypto from 'crypto';

import { RandomService } from ".";

export class CryptoRandomService implements RandomService {
  rand(n: number) {
    return crypto.randomInt(0, n);
  }
}

