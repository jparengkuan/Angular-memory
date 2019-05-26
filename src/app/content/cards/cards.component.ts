import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(public game: GameService) { }

  ngOnInit() {
  }


  countDownTimer;

  cardClicked(event) {
    let cardNumber = event.target.id;

    if(event.target.className == 'inactive') {

      if (this.game.eersteKaart == null) {
        this.game.tempEersteKaart = event.target;
        event.target.className = 'active'
        this.game.eersteKaart = cardNumber;

        let karakter = this.game.kaartenArray[cardNumber];
        event.target.innerText = karakter;

        this.game.startTijd();
        console.log(cardNumber)
      } else if (this.game.eersteKaart != null && this.game.tweedeKaart == null) {
        this.game.tempTweedeKaart = event.target;

        event.target.className = 'active'
        this.game.tweedeKaart = cardNumber;
        let karakter = this.game.kaartenArray[cardNumber];
        event.target.innerText = karakter;

        this.checkCards(this.game.tempEersteKaart, this.game.tempTweedeKaart)
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
    this.game.countDownTimer = setInterval(()=>{
      if (this.game.restoonTijd == 0)
      {
        console.log("stop countDown timer");
        clearInterval(this.game.countDownTimer);

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
    this.game.tempEersteKaart.innerText = this.game.karakter;
    this.game.tempTweedeKaart.innerText = this.game.karakter;

    this.game.tempEersteKaart.className = 'inactive';
    this.game.tempTweedeKaart.className = 'inactive';

    // Verwijder referenties naar kaarten
    this.game.eersteKaart = null;
    this.game.tweedeKaart = null;
    this.game.countDownTimer = null;
  }

  checkIfGameOver()
  {
    if (this.game.gevondenParen == this.game.kaartenArray.length / 2 )
    {
      clearInterval(this.game.speelTijdTimer);
      let name = this.game.gameModus + " " + prompt("Enter your name: ");
      console.log(name)

      let newScore = {
        name: name,
        time: this.game.verlopenTijd
      };

      this.updateScores(newScore);
      console.log(this.game.topScores)
    }
  }

  updateScores(newScore) {


    // update topscore
    this.game.topScores.push(newScore);

    // update gemiddelde speeltijd
    this.updateGemSpeeltijd();


    // Als de topscore lijst meerdere entries bevat sorteer dan
    if (this.game.topScores.length > 1)
    {
      this.game.topScores.sort((a, b) => {
        return a.time - b.time;
      });

      // Als er meer scores zijn dan 5 verwijder dan het laatste element
      if (this.game.topScores.length > 5) {
        this.game.topScores.pop();
      }


    }

  }


  updateGemSpeeltijd()
  {
    console.log("update");
    let somTijd = 0;
    let aantalScores = this.game.topScores.length;

    this.game.topScores.forEach(function(score) {
      somTijd += score.time;
    });

    //update tijd en rond af op seconden
    this.game.gemSpeelTijd = Math.floor(somTijd / aantalScores);
  }



}
