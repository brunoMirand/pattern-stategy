import { AvailableCoverage } from '@/available-coverage';

export class CalculateRisk {
  constructor(private availableCoverage: AvailableCoverage) { }

  execute(input: Input) {
    try {
      const coverage = this.availableCoverage.get(input.coverage);
      const result = coverage.calculate(input);
      return result.premium;
    } catch (error) {
      throw error.message;
    }

  }
}

type Input = {
  coverage: string;
  rate: number;
  discount: number;
}
