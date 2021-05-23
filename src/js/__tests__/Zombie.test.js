import Zombie from '../person/Zombie';

test('test Zombie', () => {
  const data = { attack: 10, defence: 40, type: 'Zombie' };
  expect(new Zombie('pers')).toEqual(expect.objectContaining(data));
});
