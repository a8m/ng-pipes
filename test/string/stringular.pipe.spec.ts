import {StringularPipe} from '../../src/string/stringular.pipe';

describe('StringularPipe', () => {
  let pipe: StringularPipe;

  beforeEach(() => {
    pipe = new StringularPipe();
  });

  it('should return the text as it was if only one argument is passed', () => {
    expect(pipe.transform('lorem ipsum dolor sit amet')).toEqual('lorem ipsum dolor sit amet');
  });

  it('should replace {n} with arguments passed after the text argument', () => {
    expect(pipe.transform('lorem {0} dolor sit amet', 'ipsum'))
        .toEqual('lorem ipsum dolor sit amet');
    expect(pipe.transform('lorem {0} dolor {1} amet', 'ipsum', 'sit'))
        .toEqual('lorem ipsum dolor sit amet');
    expect(pipe.transform('{3} {0} dolor {1} amet', 'ipsum', 'sit', null, 'lorem'))
        .toEqual('lorem ipsum dolor sit amet');
  });

  it('should keep {n} if no matching argument was found', () => {
    expect(pipe.transform('lorem {0} dolor sit amet')).toEqual('lorem {0} dolor sit amet');
    expect(pipe.transform('lorem {0} dolor {1} amet', 'ipsum'))
        .toEqual('lorem ipsum dolor {1} amet');
  });

});
