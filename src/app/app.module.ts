import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { HttpClientModule } from "@angular/common/http"
// Routes
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [
    // Modules are provided at imports section (here)
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Allows make REST requests
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
