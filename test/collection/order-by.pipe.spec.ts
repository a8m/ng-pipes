import {OrderByPipe} from '../../src/collection/order-by.pipe';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('should sort objects be the given attrs', () => {
    let games = [
      {name: 'Pako', rating: 4.21}, {name: 'Hill Climb Racing', rating: 3.87},
      {name: 'Angry Birds Space', rating: 3.88}, {name: 'Badland', rating: 4.33}
    ];

    expect(pipe.transform(games, 'name')).toEqual([
      games[2],
      games[3],
      games[1],
      games[0],
    ]);

    expect(pipe.transform(games, 'rating')).toEqual([
      games[1],
      games[2],
      games[0],
      games[3],
    ]);

    expect(pipe.transform(games, '-rating')).toEqual([
      games[3],
      games[0],
      games[2],
      games[1],
    ]);
  });

  it('should support multiple attr', () => {
    let users = [
      {name: 'Ariel', age: 20},
      {name: 'Bar', age: 20},
    ];
    expect(pipe.transform(users, 'age', '-name')).toEqual(users.reverse());
  });

});
