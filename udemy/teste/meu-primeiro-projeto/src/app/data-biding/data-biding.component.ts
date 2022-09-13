import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = 'Maria Cláudia';
  public idade: number = 40;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://epipoca.com.br/wp-content/uploads/2022/04/sailor-moon-25042022-1200x900.jpg"
  public imgTitle: string = "propertyTitle"

  public position: {x: number, y: number} = {x: 0, y: 0};

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: string) {
    alert(valor);
  }

  public mouseMoveTest(valor: MouseEvent) {

    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
