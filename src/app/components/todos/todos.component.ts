import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/model/Todo';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  faTrashAlt=faTrashAlt;
  todos:Todo[] | undefined;
  constructor(private todoService:TodoService){}
  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos)=>{
      this.todos=todos;
    });
  }
  changeTodoStatus(todo:Todo){
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo);
  }
}
