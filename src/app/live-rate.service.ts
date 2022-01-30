import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PriceSpread } from './interfaces/price-spread';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class LiveRateService {
  // private apiUrl = 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD';
  private key = 'bc47e5d153c8a73a4773aed21cb33c1e';
  private weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  // London
  private appendUrl = '&appid=';


  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get<any>(`${this.weatherUrl}London${this.appendUrl + this.key}`);
  }
}
