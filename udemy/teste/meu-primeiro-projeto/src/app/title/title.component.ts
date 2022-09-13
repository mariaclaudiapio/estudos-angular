import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'; //oninit se relaciona ao ciclo de vida do angular

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title: string = "Bem vindo!!!";

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    alert("Alterado com sucesso!");
  }

}
