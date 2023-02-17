import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static counter = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Warrior.counter += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior.counter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
