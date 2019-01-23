import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {GitSearchService} from './git-search/git-search.service';

import { AppComponent } from './app.component';
import {Gitsearchformcomponent} from './git-search-form/git-search-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighlightDirective } from './highlight.directive';
import { BoldenPipe } from './bolden.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Gitsearchformcomponent,
    PageNotFoundComponent,
    HighlightDirective,
    BoldenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
