import { TodoListService } from './../todoList.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  todoListService: TodoListService

  constructor(todoListService: TodoListService) {
    this.todoListService = todoListService
  }

  ngOnInit(): void {
  }

}
