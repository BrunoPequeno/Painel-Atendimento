import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponentComponent } from './components/table-component/table-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
