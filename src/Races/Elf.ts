import Race from './Race';

export default class Elf extends Race {
  private maxLife = 99;
  static counter = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf.counter += 1;
  }

  static createdRacesInstances(): number {
    return Elf.counter;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }
}
