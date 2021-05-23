import Undead from '../person/classUndead';

test('test Undead', () => {
  const data = { attack: 25, defence: 25, type: 'Undead' };
  expect(new Undead('pers')).toEqual(expect.objectContaining(data));
});
