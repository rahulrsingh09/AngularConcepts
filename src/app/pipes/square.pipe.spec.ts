import { SquarePipe } from './square.pipe';

describe('SquarePipe', () => {

  let pipe :SquarePipe;

  beforeEach(() => {
    pipe = new SquarePipe();
  });

  it('transforms 2 to 4', () => {
    let value: any = 2;
    expect(pipe.transform(value)).toEqual(4);
  });

});
