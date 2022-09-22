// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

export class TodoListService {
  items: string[] = ['Segurança da Informação', 'Java']
  add(newItem: string) {
    this.items.push(newItem)
  }
}
