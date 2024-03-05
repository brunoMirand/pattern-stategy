import { RiskCoverage } from '@/risk-coverage/strategy/interface';

export class Inundation implements RiskCoverage {
  private readonly FIXED_INUNDATION_RATE = 0.2;

  constructor() { }

  calculate(input: Input) {
    const { discount, rate } = input;

    const commercialAdjust = (rate * 100) / discount;
    const premium = commercialAdjust * this.FIXED_INUNDATION_RATE;

    return {
      premium
    }
  }
}

type Input = {
  rate: number;
  discount: number;
}
