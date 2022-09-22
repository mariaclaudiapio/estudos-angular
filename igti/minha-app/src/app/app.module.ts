import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { ReactiveFormsModule } from '@angular/forms';


import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { registerLocaleData } from '@angular/common';
import { CepPipe } from './cep.pipe';
import { CpfPipe } from './cpf.pipe';
import { C2Component } from './c2/c2.component';
import { TodoListService } from './todoList.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    CepPipe,
    CpfPipe,
    C2Component

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt'}, TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
