import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


  constructor(public game: GameService) {

  }

  ngOnInit() {
  }

  opnieuw()
  {
    this.game.opnieuw();
  }


  changeChar(newChar: string) {
    this.game.karakter = newChar;
  }

  changeSize(newSize: number) {
    this.game.boardSize = newSize;
  }
}
