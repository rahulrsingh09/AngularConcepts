import { SquarePipe } from './square.pipe';

describe('SquarePipe', () => {
  it('create an instance', () => {
    const pipe = new SquarePipe();
    expect(pipe).toBeTruthy();
  });
});
