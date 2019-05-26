import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // Speelveld
  speelVeld = {"Rows": []};
  kaartenArray = [];

  // Alle header variabelen
  restoonTijd: number;
  verlopenTijd: number;
  gevondenParen: number;

  // Alle instellingen variabelen
  karakter: string;
  boardSize: number;

  // Alle Ranking variabelen
  topScores = [];
  gemSpeelTijd: number;

  // Kaarten
  eersteKaart: number;
  tweedeKaart: number;

  // Kaarten temp
  tempEersteKaart;
  tempTweedeKaart;

  // Timers
  speelTijdTimer;
  countDownTimer;

  //overig
  gameModus: string;




  constructor() {
    // Init default
    this.restoonTijd = 3;
    this.verlopenTijd = 0;
    this.gevondenParen = 0;
    this.karakter = '#';
    this.boardSize = 2;
    this.gemSpeelTijd = 0;

    this.createBoard()
    console.log(this.speelVeld)
    console.log(this.kaartenArray)
  }

  createBoard(kaartCount = 0) {

    switch (this.boardSize) {

      case 2:
        this.gameModus = 'noob';
        break;
      case 4:
        this.gameModus = 'novice';
        break;
      case 6:
        this.gameModus = 'expert';
        break;

    }


    var uniekeLetter = this.nextLetter(this.boardSize);

    for (let i = 0; i < this.boardSize; i++ ) {

      this.speelVeld.Rows.push({kaarten: []})

      for (let j = 0; j < this.boardSize; j++ ) {

        this.speelVeld.Rows[i].kaarten.push(kaartCount);

        this.kaartenArray.push(uniekeLetter())
        kaartCount++;
      }
    }
  }


  opnieuw() {

    //TODO Alle logic om een nieuwe board te maken, en variabelen te resetten
    console.log("Nieuwe game")

    // Reset init variabelen
    this.restoonTijd = 3;
    this.verlopenTijd = 0;
    this.gevondenParen = 0;
    this.kaartenArray = [];

    // Reset speelveld
    this.speelVeld = {"Rows": []};

    // Reset timers en referenties
    clearInterval(this.speelTijdTimer);
    clearInterval(this.countDownTimer);

    this.speelTijdTimer = null;
    this.countDownTimer = null;

    // Reset referenties naar kaarten
    this.eersteKaart = null;
    this.tweedeKaart = null;
    this.tempEersteKaart = null;
    this.tempTweedeKaart = null;

    this.createBoard();
  }

startTijd()
{
  if(!this.speelTijdTimer) {
    this.speelTijdTimer = setInterval(() => {
      this.verlopenTijd++
    }, 1000);
  }
}





  shuffle(Array) {
    var currentIndex = Array.length,
      temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = Array[currentIndex];
      Array[currentIndex] = Array[randomIndex];
      Array[randomIndex] = temporaryValue;
    }
    return Array;
  }

   nextLetter = function (size) {
    var letterArray = "AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ".substring(0, size * size).split('');
    var idx = 0;
    letterArray = this.shuffle(letterArray);
    return function () {
      var letter = letterArray[idx++];
      return letter;
    }
  }


}
