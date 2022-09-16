import { ToDoItem } from './to-do-item';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  tasks: ToDoItem[] = [
    { description: 'Arrumar a cama', done: false },
    { description: 'Estudar Angular', done: true },
  ];

  addTask(description: string) {
    this.tasks.push({
      description: description,
      done: false
    });
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
}
