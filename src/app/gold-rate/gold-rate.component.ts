import { Component, OnInit } from '@angular/core';
import { PriceSpread } from '../interfaces/price-spread';
import { LiveRateService } from '../live-rate.service';
@Component({
  selector: 'app-gold-rate',
  templateUrl: './gold-rate.component.html',
  styleUrls: ['./gold-rate.component.scss']
})
export class GoldRateComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  // priceSpreads!: PriceSpread[];
  priceSpread: PriceSpread = {topo: {
    platform: 'string',
    server: 'string'
},
spreadProfilePrices: [
{
    spreadProfile: 'string',
    bidSpread: 505,
    askSpread: 505,
    bid: 505,
    ask: 505
},
{
    spreadProfile: 'string',
    bidSpread: 505,
    askSpread: 505,
    bid: 505,
    ask: 505
},
{
    spreadProfile: 'string',
    bidSpread: 505,
    askSpread: 505,
    bid: 505,
    ask: 505
}
],
ts: 505};
  platform:string = 'Searching...';
  server:string = 'Searching...';

  constructor(private rateService: LiveRateService) { }

  ngOnInit(): void {
    // this.rateService.getSpread().subscribe(
    //   (values) => (this.priceSpread = values[0])
    // );
    this.rateService.getWeather().subscribe(
      (value) => (console.log(value))
    );
  }

}
