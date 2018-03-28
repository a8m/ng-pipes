import {ByteFmtPipe} from '../../src/math/byte-fmt.pipe';

describe('ByteFmtPipe', () => {
  let pipe: ByteFmtPipe;

  beforeEach(() => {
    pipe = new ByteFmtPipe();
  });

  it('should return the correct display from number of bytes', () => {
    expect(pipe.transform(0, 2)).toEqual('0 B');
    expect(pipe.transform(5, 2)).toEqual('5 B');
    expect(pipe.transform(1024, 0)).toEqual('1 KB');
    expect(pipe.transform(1998, 2)).toEqual('1.95 KB');
    expect(pipe.transform(1049901, 5)).toEqual('1.00126 MB');
    expect(pipe.transform(909234901, 1)).toEqual('867.1 MB');
    expect(pipe.transform(1339234901, 5)).toEqual('1.24726 GB');
    expect(pipe.transform(23423234234, 2)).toEqual('21.81 GB');
    expect(pipe.transform(23985391855616, 2)).toEqual('21.81 TB');
    expect(pipe.transform(95340189555097611, 1)).toEqual('84.7 PB');
    expect(pipe.transform(2249548013871562752, 3)).toEqual('1.951 EB');
    expect(pipe.transform(5180591620717411303425, 2)).toEqual('4.39 ZB');
    expect(pipe.transform(5123980591620717411303425, 2)).toEqual('4.24 YB');
  });

  it('should return NaN if decimal point is less than zero or not a number', () => {
    expect(pipe.transform(0.45, -1)).toEqual('NaN');
    expect(pipe.transform(-0.25, -101)).toEqual('NaN');
    expect(pipe.transform(0.45, 1.3)).toEqual('NaN');
    expect(pipe.transform(0.45, '0')).toEqual('NaN');
    expect(pipe.transform(0.45, [3])).toEqual('NaN');
    expect(pipe.transform(0.45, {num: 4})).toEqual('NaN');
  });

});
