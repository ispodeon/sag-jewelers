import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GoldRateComponent } from './gold-rate/gold-rate.component';
import { LiveRateService } from './live-rate.service';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { CatalogListItemComponent } from './catalog-list-item/catalog-list-item.component';
import { JewelryItemComponent } from './jewelry-item/jewelry-item.component';
import { AddressCardComponent } from './about/address-card/address-card.component';
import { ContactComponent } from './contact/contact.component';
import { ContactCardComponent } from './about/contact-card/contact-card.component';
import { BusinessHoursCardComponent } from './about/business-hours-card/business-hours-card.component';
import { CartComponent } from './cart/cart.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'jewelry', component: JewelryItemComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'item-detail', component: ItemDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GoldRateComponent,
    CatalogComponent,
    HomeComponent,
    CatalogListItemComponent,
    JewelryItemComponent,
    AddressCardComponent,
    ContactComponent,
    ContactCardComponent,
    BusinessHoursCardComponent,
    CartComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatBadgeModule,
    MatSelectModule,
    MatButtonToggleModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LiveRateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
