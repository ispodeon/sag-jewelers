import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PriceSpread } from './interfaces/price-spread';

@Injectable({
  providedIn: 'root'
})

export class LiveRateService {
  private apiUrl = 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD';

  constructor(private http: HttpClient) { }

  getSpread(): Observable<PriceSpread[]>{
    return this.http.get<PriceSpread[]>(this.apiUrl);
  }
}
