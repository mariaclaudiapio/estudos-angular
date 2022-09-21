import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minha-app'
  text = 'Uma mensagem qualquer'
  n = 12050.4983
  hoje = new Date()
}
