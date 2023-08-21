import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import {AboutComponent} from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { CardDetailComponent } from '../components/card-detail/card-detail.component';
import {  SearchBarComponent } from '../components/searchbar/searchbar.component';
import { FavoritesComponent } from '../components/favorites/favorites.component';
import { PaginadoComponent } from '../components/paginado/paginado.component';
import { CreateCountryComponent} from '../components/create-country/create-country.component';
import { CountryServiceComponent } from '../components/service/country-service/country-service.component'; 


import { ReactiveFormsModule } from '@angular/forms';
import { EditCountryComponent } from '../components/edit-country/edit-country.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    WelcomeComponent,
    CardDetailComponent,
    SearchBarComponent,
    FavoritesComponent,
    PaginadoComponent,
    CreateCountryComponent,
    EditCountryComponent,
    
   


  
  ],
 
  
  imports: [BrowserModule,
     FormsModule,
     AppRoutingModule,
     HttpClientModule,
     AppRoutingModule,
     RouterModule,
     ReactiveFormsModule,
  ],


  providers: [
    CountryServiceComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
