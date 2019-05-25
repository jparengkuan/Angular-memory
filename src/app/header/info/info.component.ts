import { Component, OnInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [NgbProgressbarConfig]
})
export class InfoComponent implements OnInit {

  constructor(config: NgbProgressbarConfig, private game: GameService) {
    config.max = 3;
    config.striped = true;
    config.animated = true;
    config.type = 'info';
    config.height = '20px';

  }

  ngOnInit() {
  }

  ngDoCheck() {
  }

}
