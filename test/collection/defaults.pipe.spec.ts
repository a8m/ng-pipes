import {DefaultsPipe} from '../../src/collection/defaults.pipe';

describe('DefaultsPipe', () => {
  let pipe: DefaultsPipe;

  beforeEach(() => {
    pipe = new DefaultsPipe();
  });

  it('should change the source object', () => {
    const array: Array<any> = [{a: 1}];
    const defaults: any = {b: 2};
    const copy: Array<any> = array.map(o => Object.assign({}, o));

    expect(pipe.transform(array, defaults)).toEqual([{a: 1, b: 2}]);
    expect(array).not.toEqual(copy);
  });

  describe('should use fallback value', () => {
    const expectOrders: Array<any> = [
      {id: 1, destination: {zip: 21908}, name: 'Ariel M.'},
      {id: 2, destination: {zip: 'Pickup'}, name: 'John F.'},
      {id: 3, destination: {zip: 45841}, name: 'Not available'},
      {id: 4, destination: {zip: 78612}, name: 'Danno L.'}
    ];
    const defaults = {name: 'Not available', destination: {zip: 'Pickup'}};

    it('should work with array', () => {
      const orders: Array<any> = [
        {id: 1, destination: {zip: 21908}, name: 'Ariel M.'}, {id: 2, name: 'John F.'},
        {id: 3, destination: {zip: 45841}}, {id: 4, destination: {zip: 78612}, name: 'Danno L.'}
      ];
      const copyOrders: Array<any> = orders.map(o => Object.assign({}, o));
      expect(pipe.transform(copyOrders, defaults)).toEqual(expectOrders);
      expect(pipe.transform(copyOrders, defaults)).not.toEqual(orders);
    });

    it('should work with object', () => {
      const orders: any = {
        0: {id: 1, destination: {zip: 21908}, name: 'Ariel M.'},
        1: {id: 2, name: 'John F.'},
        2: {id: 3, destination: {zip: 45841}},
        3: {id: 4, destination: {zip: 78612}, name: 'Danno L.'}
      };
      const copyOrders = Object.assign({}, orders);

      expect(pipe.transform(copyOrders, defaults)).toEqual(expectOrders);
      expect(pipe.transform(copyOrders, defaults)).not.toEqual(orders);
    });
  });

  it('should work fine with complex objects', () => {
    let array: Array<any> =
        [{a: 'string', b: {c: 1}, d: {e: {f: new Function()}}, i: {j: {k: {l: 'm'}}}}];
    const copy: Array<any> = array.map(o => Object.assign({}, o));
    const defaults: any = {z: 'z', z1: {z2: 'z2'}, h: 1};
    Object.assign(array[0], defaults);
    expect(pipe.transform(copy, defaults)).toEqual(array);
  });

});
