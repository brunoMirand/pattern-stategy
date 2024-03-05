import { RiskCoverage } from '@/risk-coverage/strategy/interface';

export class Context {
  constructor(private readonly strategy: RiskCoverage) { }

  calculate(input: Input) {
    return this.strategy.calculate(input);
  }
}


type Input = {
  rate: number;
  discount: number;
}
