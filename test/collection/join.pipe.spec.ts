import {JoinPipe} from '../../src/collection/join.pipe';

describe('JoinPipe', () => {
  let pipe: JoinPipe;
  ;

  beforeEach(() => {
    pipe = new JoinPipe();
  });

  describe('given a collection', () => {
    let arr: any;

    describe('which is empty', () => {
      beforeEach(() => {
        arr = [];
      });

      it('should return an empty string', () => {
        expect(pipe.transform(arr)).toEqual('');
      });

    });

    describe('of strings', () => {
      beforeEach(() => {
        arr = ['hello', 'world'];
      });

      describe('with no delimiter', () => {
        it('should join elements with a space', () => {
          expect(pipe.transform(arr)).toEqual('hello world');
        });
      });

      describe('with a custom delimiter', () => {
        let delim: any;

        describe('which is not a string', () => {
          it('should join elements with a toString representation of the delimiter', () => {
            delim = true;
            expect(pipe.transform(arr, delim)).toEqual('hellotrueworld');

            delim = 10;
            expect(pipe.transform(arr, delim)).toEqual('hello10world');

            delim = {
              toString: () => {
                return ' - ';
              }
            };
            expect(pipe.transform(arr, delim)).toEqual('hello - world');
          });
        });

        it('should join elements with the given delimiter', () => {
          delim = ', ';
          expect(pipe.transform(arr, delim)).toEqual('hello, world');
        });
      });
    });

  });

});
