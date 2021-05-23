import Daemon from '../person/Daemon';

test('test Daemon', () => {
  const data = { attack: 10, defence: 40, type: 'Daemon' };
  expect(new Daemon('pers')).toEqual(expect.objectContaining(data));
});
