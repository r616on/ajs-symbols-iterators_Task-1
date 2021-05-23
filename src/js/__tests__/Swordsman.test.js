import Swordsman from '../person/Swordsman';

test('test Swordsman', () => {
  const data = { attack: 40, defence: 10, type: 'Swordsman' };
  expect(new Swordsman('pers')).toEqual(expect.objectContaining(data));
});
