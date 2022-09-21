import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { registerLocaleData } from '@angular/common';
import { CepPipe } from './cep.pipe';
import { CpfPipe } from './cpf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    CepPipe,
    CpfPipe

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
