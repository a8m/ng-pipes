import { JoinPipe } from '../../src/index';

describe('JoinPipe', () => {
	let pipe: JoinPipe;;
	beforeEach(() => {
		pipe = new JoinPipe();
	});

	describe('given a collection', function () {
    let arr: any;

    describe('which is empty', function () {
      beforeEach(function () {
        arr = [];
      });

      it('should return an empty string', function () {
        expect(pipe.transform(arr)).toEqual('');
      });

    });

    describe('of strings', function () {
      beforeEach(function () {
        arr = ['hello', 'world'];
      });

      describe('with no delimiter', function () {
        it('should join elements with a space', function () {
          expect(pipe.transform(arr)).toEqual('hello world');
        });
      });

      describe('with a custom delimiter', function () {
        let delim: any;

        describe('which is not a string', function () {
          it('should join elements with a toString representation of the delimiter', function () {
            delim = true;
            expect(pipe.transform(arr, delim)).toEqual('hellotrueworld');

            delim = 10;
            expect(pipe.transform(arr, delim)).toEqual('hello10world');

            delim = {toString: function () { return ' - ' }}
            expect(pipe.transform(arr, delim)).toEqual('hello - world');
          });
        });

        it('should join elements with the given delimiter', function () {
          delim = ', '
          expect(pipe.transform(arr, delim)).toEqual('hello, world');
        });
      });
    });

  });
});
