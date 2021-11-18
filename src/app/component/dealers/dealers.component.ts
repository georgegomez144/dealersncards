import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Dealer } from 'src/app/interface/interfaces';

@Component({
  selector: 'dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.scss'],
})
export class DealersComponent implements OnInit {
  loading: boolean = true;
  dealers: Dealer[] = [];
  dealerId: string | null = null;
  dealerOpen : boolean = false;

  constructor(private api: ApiService) {
    this.getDealers();
  }

  ngOnInit(): void {}

  getDealers(): void {
    this.api.getDealers().subscribe((dealers) => {
      if (dealers) {
        this.dealers = dealers;
        this.loading = false;
      }
    });
  }

  toggleDealer(status: boolean): void {
    this.dealerOpen = status;
  }
}
