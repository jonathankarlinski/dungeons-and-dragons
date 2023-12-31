import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(
    protected player1: Fighter,
    protected player2: Fighter,
  ) { super(player1); }

  fight(): number {
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    return this.player1.lifePoints === -1 ? -1 : 1;
  }
}
