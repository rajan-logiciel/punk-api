import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

/**
 * @import Components
 * */
import { BeersComponent } from './components/beers/beers.component';
import { RandomBeerComponent } from './components/random-beer/random-beer.component';
import { BeerSearchListComponent } from './components/beer-search-list/beer-search-list.component';

/**
 * @import Pipes
 */
import { StrTruncatePipe  } from './pipes/truncate-char';
import { StrReplacePipe  } from './pipes/replace-char';



@NgModule({
  declarations: [
    BeersComponent,
    RandomBeerComponent,
    StrTruncatePipe,
    StrReplacePipe,
    BeerSearchListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [BeersComponent]
})
export class AppModule { }
