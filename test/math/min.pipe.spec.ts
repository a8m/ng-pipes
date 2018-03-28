import {MinPipe} from '../../src/math/min.pipe';

describe('MinPipe', () => {
  let pipe: MinPipe;

  beforeEach(() => {
    pipe = new MinPipe();
  });

  it('should get an array of numbers and return the lowest one', () => {
    expect(pipe.transform([1, 2, 3, 4, 5])).toEqual(1);
    expect(pipe.transform([2, 0, 2, 2, 2])).toEqual(0);
    expect(pipe.transform([1])).toEqual(1);
  });

  it('should get an array and expression and return an object', () => {
    const users: Array<any> = [
      {user: {score: 988790}}, {user: {score: 123414}}, {user: {rank: 100000}},
      {user: {score: 987621}}
    ];

    expect(pipe.transform(users, 'user.rank')).toEqual(users[2]);
    expect(pipe.transform(users, 'user.score')).toEqual(users[1]);
  });

});
