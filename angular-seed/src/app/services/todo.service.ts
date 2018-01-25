import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
      new Todo('todo 1'),
      new Todo('todo 2', 1, true),
      new Todo('todo 3')
    ];
  
  constructor() {
    
      }
    
      list(): Todo[] {
        return this.todos;
      }    
  create(des: string, num: Number, bol: boolean){
	this.todos.push(new Todo(des, num, bol));
	
  }      
}
