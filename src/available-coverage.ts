import { Fire } from '@/risk-coverage/strategy/residence/fire';
import { Inundation } from '@/risk-coverage/strategy/residence/inundation';
import { Context } from '@/risk-coverage/strategy/context';


export class AvailableCoverage {
  private readonly coverage: Map<string, Context> = new Map([
    ['fire', new Context(new Fire())],
    ['inundation', new Context(new Inundation())],
  ]);

  get(coverageType: string): Context {
    const coverage = this.coverage.get(coverageType);
    if (!coverage) {
      throw new Error('coverage not implemented');
    }
    return coverage;
  }
}
