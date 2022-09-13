import { AfterContentChecked, Component, OnInit, DoCheck, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
/* DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked
*/

@Component({
  selector: 'app-root',
  template: `
    {{ valor }}
    <button (click)="adicionar()">Adicionar</button>
    <router-outlet></router-outlet>`
})
export class AppComponent implements
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked {

  public valor: number = 1;

  constructor() { }

  public adicionar(): number {
    return this.valor += 1;
  }

  ngOnInit(): void {
    console.log('OnInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }


}
