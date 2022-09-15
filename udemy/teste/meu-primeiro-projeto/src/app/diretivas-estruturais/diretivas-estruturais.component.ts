import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {


  public condicao: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{nome: string, signo: string}> = [
    { nome: "Maria Cláudia", signo: "câncer" },
    { nome: "Maria Antônia", signo: "gêmeos"},
    { nome: "Maria Honorata", signo: "aquário"},
  ];

  public nome: string = 'Maria';

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.condicao) {
        this.condicao = false;
      } else {
        this.condicao = true;
      }
    }, 2000)
  }

  public onClick() {
    if(this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({nome: "Rosânia", signo: "câncer"})
  }

}
