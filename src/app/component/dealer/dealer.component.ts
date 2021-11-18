import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dealer } from 'src/app/interface/interfaces';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss'],
})
export class DealerComponent implements OnInit {
  @Input('id') dealerId: any;
  showDeck: boolean = false;

  dealer: Dealer | null = null;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getDealer(this.dealerId).subscribe((dealer) => {
      if(dealer) this.dealer = dealer;
    });
  }

  openAndShowDeck(): void {
    this.showDeck = true;
  }

  closeDeck(): void {
    this.showDeck = false;
  }
}
