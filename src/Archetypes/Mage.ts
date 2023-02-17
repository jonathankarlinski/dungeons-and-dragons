import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static counter = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
    Mage.counter += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage.counter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
