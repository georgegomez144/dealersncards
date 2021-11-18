import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status, Dealer, Deck } from '../interface/interfaces';

const URL = 'https://dealer-5wb4b3itbq-uc.a.run.app';
const TOKEN = 'Bearer d61468e0-43fc-11ec-90a5-106530de3ca7';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  options = {};

  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders()
        .set('Authorization', TOKEN)
        .set('Accept', 'application/json')
    };
  }

  /* 
  GET /status/
  This is a request to ensure configs are set up correctly. An auth token is not required but if set in
  the header it will return it back to you in this call to verify you are passing it correctly
  */
  getStatus(): Observable<Status> {
    return this.http.get<Status>(`${URL}/status`, this.options);
  }

  /* 
  GET /dealers/
  Returns all dealers, it will always be 5.
  */
  getDealers(): Observable<Dealer[]> {
    return this.http.get<Dealer[]>(`${URL}/dealers/`, this.options);
  }

  /* 
  GET /dealers/{id}/
  Returns a single dealer by id
  */
  getDealer(id: string): Observable<Dealer> {
    return this.http.get<Dealer>(`${URL}/dealers/${id}/`, this.options);
  }

  /* 
  GET /dealers/{id}/deck/
  Returns a deck of cards in their current order
  */
  getDealersDeck(id: string): Observable<Deck[]> {
    return this.http.get<Deck[]>(`${URL}/dealers/${id}/deck/`, this.options);
  }

  /* 
  GET /dealers/{id}/shuffle/
  This will shuffle all the cards
  */
  shuffleDealersDeck(id: string): Observable<Deck[]> {
    return this.http.get<Deck[]>(`${URL}/dealers/${id}/shuffle/`, this.options);
  }

  /* 
  GET /dealers/{id}/arrange/
  This will arrange the cards in a consistent order
  */
  arrangeDealersDeck(id: string): Observable<Deck[]> {
    return this.http.get<Deck[]>(`${URL}/dealers/${id}/arrange/`, this.options);
  }
}
