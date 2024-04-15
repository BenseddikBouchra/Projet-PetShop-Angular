import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilClientComponent } from './Partie-Client/acceuil-client/acceuil-client.component';
import { MenuClientComponent } from './Partie-Client/menu-client/menu-client.component';
import { BasDePageClientComponent } from './Partie-Client/bas-de-page-client/bas-de-page-client.component';
import { AproposClientComponent } from './Partie-Client/apropos-client/apropos-client.component';
import { ContactClientComponent } from './Partie-Client/contact-client/contact-client.component';
import { CategoriesClientComponent } from './Partie-Client/categories-client/categories-client.component';
import { SpecialsClientComponent } from './Partie-Client/specials-client/specials-client.component';
import { SinscrireClientComponent } from './Partie-Client/sinscrire-client/sinscrire-client.component';
import { SidentifierClientComponent } from './Partie-Client/sidentifier-client/sidentifier-client.component';
import { TermesConditionsComponent } from './Partie-Client/termes-conditions/termes-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilClientComponent,
    MenuClientComponent,
    BasDePageClientComponent,
    AproposClientComponent,
    ContactClientComponent,
    CategoriesClientComponent,
    SpecialsClientComponent,
    SinscrireClientComponent,
    SidentifierClientComponent,
    TermesConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
