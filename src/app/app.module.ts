import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { InformationComponent } from './information/information.component';
import { ExamplesComponent } from './examples/examples.component';
import { LinksComponent } from './links/links.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImpressumComponent,
    PrivacyComponent,
    InformationComponent,
    ExamplesComponent,
    LinksComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
