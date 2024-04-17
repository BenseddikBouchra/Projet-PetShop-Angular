import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-achat-client',
  templateUrl: './details-achat-client.component.html',
  styleUrls: ['./details-achat-client.component.css'],
})
export class DetailsAchatClientComponent implements OnInit {
  counter: number = 1;
  maxcounter: number = 10;
  valeur!: number;
  constructor() {}

  ngOnInit(): void {}
  quantite() {
    if (this.counter < this.maxcounter) {
      this.counter++;

      this.valeur = this.counter;
    }
      else {
      this.counter--;
            this.valeur = this.counter;


    }
  }
  quantiteminus() {
    if (this.counter >0) {
      this.counter--;
      this.valeur = this.counter;
    }
  }
}
