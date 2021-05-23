import Bowerman from '../person/Bowerman';

test('test Bowerman', () => {
  const data = { attack: 25, defence: 25, type: 'Bowerman' };
  expect(new Bowerman('pers')).toEqual(expect.objectContaining(data));
});
