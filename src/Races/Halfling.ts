import Race from './Race';

export default class Halfling extends Race {
  private maxLife = 60;
  static counter = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Halfling.counter += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.counter;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }
}
