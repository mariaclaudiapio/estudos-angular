// import { TodoListService } from './todoList.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'minha-app'
  // text = 'Uma mensagem qualquer'
  // n = 12050.4983
  // hoje = new Date()
  // meuCep = '33136016'
  // meuCpf = '12345678901'

  // todoListService: TodoListService

  // constructor(todoListService: TodoListService) {
  //   this.todoListService = todoListService
  // }

  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('')
  })

  onSubmit() {
    console.log(this.myForm.value)
  }

  }

