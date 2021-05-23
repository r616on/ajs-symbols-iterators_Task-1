import Character from '../Character';

test('test error the length of the name is incorrect', () => {
  expect(() => new Character('p')).toThrow('Длинна имени не верна');
});
test('test error the type of the name is incorrect', () => {
  expect(() => new Character({})).toThrow('Неправильный тип данных');
});
