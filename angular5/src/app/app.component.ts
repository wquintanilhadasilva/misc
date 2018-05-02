import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  dados: any = { prop: { list: [3, 2, 1, 0] } };

  array: any[] = [{ name: 'John'} , { name: 'Mary' }, { name: 'Adam' }];
  order: string = 'name';

  asc = false;

  constructor() {}

  setOrder() {
    this.asc = !this.asc;
  }

}
