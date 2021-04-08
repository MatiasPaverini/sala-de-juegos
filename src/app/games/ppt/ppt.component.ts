import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {

  newGame: any;
  message: string;
  counter: number;
  hideCheck: boolean;
  decision: string[] = ['Piedra', 'Papel', 'Tijera'];
  gameName: string = "Piedra, papel o tijera";

  constructor() { }

  /**
   * parseDecision
   */
   public parseDecision(player) {
    return this.decision[player];
  }

  /**
   * prepareGame
   */
  public prepareGame() {
    this.newGame.player1 = -1;
    this.newGame.player2 = -1;
    this.hideCheck = true;
    this.newGame.getPlayerDecision(true);
    this.newGame.choose();
    console.log("Decision de la máquina: " + this.parseDecision(this.newGame.player2));
  }

  public selectOption(player:boolean, option:number) {
    this.newGame.choose(player, option);
    this.hideCheck = true;
    this.newGame.gano = false;
    this.newGame.status = '';
  }


  ngOnInit(): void {
  }

}
