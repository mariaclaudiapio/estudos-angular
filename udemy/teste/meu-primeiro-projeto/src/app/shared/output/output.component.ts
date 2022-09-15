import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter()
  public list: Array<{nome: string, idade: number}> = [
    { nome: "Matias Del Lago", idade: 38 },
    { nome: "Maria Cláudia", idade: 40 },
    { nome: "Maria Antônia", idade: 79 }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }

}
