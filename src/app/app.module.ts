import { FetchService } from './fetch.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([AppComponent]),
    HttpClientModule,
    ButtonModule,
    FormsModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
