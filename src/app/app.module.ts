import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AskingComponent } from './asking/asking.component';
import { MainComponent } from './main/main.component';

import { GeneralService } from './general.service';

@NgModule({
  declarations: [
    AppComponent,
    AskingComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
