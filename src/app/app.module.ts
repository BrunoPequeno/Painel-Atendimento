import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponentComponent } from './components/table-component/table-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
    HeaderComponentComponent,
  ],
  imports: [ CommonModule,
    BrowserModule, AngularFireModule.initializeApp({
      apiKey: "AIzaSyDF_AKopUZBAGtppR-Hnowm0O9BkbvUafo",
      authDomain: "painel-latam.firebaseapp.com",
      databaseURL: "https://painel-latam-default-rtdb.firebaseio.com",
      projectId: "painel-latam",
      storageBucket: "painel-latam.appspot.com",
      messagingSenderId: "1012355389802",
      appId: "1:1012355389802:web:2f2be7a87f9e07b84fed13"
    }),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
