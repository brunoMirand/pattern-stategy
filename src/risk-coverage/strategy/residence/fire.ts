import { RiskCoverage } from '@/risk-coverage/strategy/interface';

export class Fire implements RiskCoverage {
  private readonly FIXED_FIRE_RATE = 0.5;

  constructor() { }

  calculate(input: Input) {
    const { discount, rate } = input;

    const commercialAdjust = (rate * 1000) / discount;
    const premium = commercialAdjust * this.FIXED_FIRE_RATE;

    return {
      premium
    }
  }
}

type Input = {
  rate: number;
  discount: number;
}
