export default class Character {
  constructor(name, type) {
    if (typeof name === 'string') {
      if (name.length > 2 && name.length < 10) {
        this.name = name;
      } else {
        throw new Error('Длинна имени не верна');
      }
    } else {
      throw new Error('Неправильный тип данных');
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = '';
    this.defence = '';
  }
}
