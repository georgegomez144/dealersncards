import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private api: ApiService) {
    api.getStatus().subscribe((status) => console.log({ status }));
  }

  title = 'Dealer and Cards';
  company = 'Genius Monkey';
}
