export interface RiskCoverage {
  calculate(input: Input): Output
}

type Output = {
  premium: number;
}

type Input = {
  rate: number;
  discount: number;
}