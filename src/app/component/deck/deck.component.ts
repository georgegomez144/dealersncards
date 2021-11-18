import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/interface/interfaces';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss'],
})
export class DeckComponent implements OnInit {
  @Input('id') dealerId: any;
  @Input() fetchDeck: boolean = false;
  loading: boolean = false;
  deck: Card[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loading = true;
    this.api.getDealersDeck(this.dealerId).subscribe((deck) => {
      if (deck) {
        this.deck = deck;
        this.loading = false;
      }
    });
  }

  shuffleDeck(): void {
    this.loading = true;
    this.deck = [];
    this.api.shuffleDealersDeck(this.dealerId).subscribe((deck) => {
      if (deck) {
        console.log({ shuffled: deck });
        this.deck = deck;
        this.loading = false;
      }
    });
  }

  arrangeDeck(): void {
    this.loading = true;
    this.deck = [];
    this.api.arrangeDealersDeck(this.dealerId).subscribe((deck) => {
      if (deck) {
        console.log({ arranged: deck });
        this.deck = deck;
        this.loading = false;
      }
    });
  }
}
