import { Task } from './Task';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks: Task[];

  value = false;

  inputWed = 'inicial';
  inputWed2;


  constructor() {
  }

  public listar(): void {
    this.tasks = new Array<Task>();
    for (let i = 0; i <= 50; i++) {
      const t: Task = {id: i, nome: `tarefa ${i}`, time: i};
      this.tasks.push(t);
    }
  }

}


