import {MaxPipe} from '../../src/math/max.pipe';

describe('MaxPipe', () => {
  let pipe: MaxPipe;

  beforeEach(() => {
    pipe = new MaxPipe();
  });

  it('should get an array of numbers and return the biggest one', () => {
    expect(pipe.transform([1, 2, 3, 4, 5])).toEqual(5);
    expect(pipe.transform([2, 2, 2, 2, 2])).toEqual(2);
    expect(pipe.transform([1])).toEqual(1);
  });

  it('should get an array and expression and return an object', () => {
    const users: Array<any> = [
      {user: {score: 988790}}, {user: {score: 123414}}, {user: {rank: 988999}},
      {user: {score: 987621}}
    ];
    expect(pipe.transform(users, 'user.rank')).toEqual(users[2]);
    expect(pipe.transform(users, 'user.score')).toEqual(users[0]);
  });

});
