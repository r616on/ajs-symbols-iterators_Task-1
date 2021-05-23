import Magician from '../person/Magician';

test('test Magician', () => {
  const data = { attack: 10, defence: 40, type: 'Magician' };
  expect(new Magician('pers')).toEqual(expect.objectContaining(data));
});
