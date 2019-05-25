import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private game: GameService) { }

  ngOnInit() {
  }

  tempEersteKaart;
  tempTweedeKaart;
  countDownTimer;

  cardClicked(event) {
    let cardNumber = event.target.id;

    if(event.target.className == 'inactive') {

      if (this.game.eersteKaart == null) {
        this.tempEersteKaart = event.target;
        event.target.className = 'active'
        this.game.eersteKaart = cardNumber;

        let karakter = this.game.kaartenArray[cardNumber];
        event.target.innerText = karakter;

        this.game.startTijd();
        console.log(cardNumber)
      } else if (this.game.eersteKaart != null && this.game.tweedeKaart == null) {
        this.tempTweedeKaart = event.target;

        event.target.className = 'active'
        this.game.tweedeKaart = cardNumber;
        let karakter = this.game.kaartenArray[cardNumber];
        event.target.innerText = karakter;

        this.checkCards(this.tempEersteKaart, this.tempTweedeKaart)
      }
    }
  }




  checkCards(card1, card2)
  {
    console.log('checked card functie')
    if (card1.innerText == card2.innerText)
    {
      card1.className = 'found';
      card2.className = 'found';

      this.game.gevondenParen++;

      this.game.eersteKaart = null;
      this.game.tweedeKaart = null;

      this.checkIfGameOver()


    }
    else {
      this.countDownTimerStart()
    }
  }

  countDownTimerStart()
  {
    this.countDownTimer = setInterval(()=>{
      if (this.game.restoonTijd == 0)
      {
        console.log("stop countDown timer");
        clearInterval(this.countDownTimer);

        //Reset de toontijd
        this.game.restoonTijd = 3;
        this.deActiveCards()
      }
      else {
        this.game.restoonTijd--;
      }
    }, 1000);

  }

  deActiveCards()
  {
    this.tempEersteKaart.innerText = this.game.karakter;
    this.tempTweedeKaart.innerText = this.game.karakter;

    this.tempEersteKaart.className = 'inactive';
    this.tempTweedeKaart.className = 'inactive';

    // Verwijder referenties naar kaarten
    this.game.eersteKaart = null;
    this.game.tweedeKaart = null;
    this.countDownTimer = null;
  }

  checkIfGameOver()
  {
    if (this.game.gevondenParen == this.game.kaartenArray.length / 2 )
    {
      clearInterval(this.game.speelTijdTimer);
      prompt("Enter your name: ");
    }
  }



}
