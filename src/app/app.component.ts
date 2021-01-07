import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';
  cards: any[] = [
    { id: 1, name: "Датчик1", status: Boolean(this.getStat())},
    { id: 2, name: "Датчик2", status: Boolean(this.getStat())},
    { id: 3, name: "Датчик3", status: Boolean(this.getStat())},
    { id: 4, name: "Датчик4", status: Boolean(this.getStat())},
    { id: 5, name: "Датчик5", status: Boolean(this.getStat())},
    { id: 6, name: "Датчик6", status: Boolean(this.getStat())},
    { id: 7, name: "Датчик7", status: Boolean(this.getStat())},
    { id: 8, name: "Датчик8", status: Boolean(this.getStat())},
    { id: 9, name: "Датчик9", status: Boolean(this.getStat())},
    { id: 10, name: "Датчик10", status: Boolean(this.getStat())},
  ]
  getStat() {
    return Math.floor(Math.random() * (2));
  }
  createCard(card_name) {
    this.cards.push({ id: this.cards.length + 1, name: card_name, status: Boolean(this.getStat())})
  }
  deleteCard(elem) {
    document.getElementById("card_block" + elem).style.display = "none";
  }
}
