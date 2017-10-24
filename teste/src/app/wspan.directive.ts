import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Task } from './Task';

@Directive({
  selector: '[appWspan]'
})
export class WspanDirective {

  private _task: Task;

  constructor(private el: ElementRef) { }

  get appWspan() {
    return this._task;
  }

  @Input()
  set appWspan(value: Task){
    this._task = value;
    this.changeColorTask();
  }

  private changeColorTask() {

    this.el.nativeElement.style.background = 'yellow';

    if (this._task.id < 10) {
      this.el.nativeElement.style.color = this._task.id % 2 === 0 ? 'red' : 'green';
    } else if (this._task.id < 20) {
      this.el.nativeElement.style.color = this._task.id % 2 === 0 ? 'blue' : 'yellow';
      this.el.nativeElement.style.background = 'SteelBlue';
    } else if (this._task.id < 30) {
      this.el.nativeElement.style.color = this._task.id % 2 === 0 ? 'brown' : 'gray';
    } else if (this._task.id < 40) {
      this.el.nativeElement.style.color = this._task.id % 2 === 0 ? 'BlueViolet' : 'Coral';
    }else {
      this.el.nativeElement.style.color = this._task.id % 2 === 0 ? 'DarkRed' : 'plum';
    }
  }

  @HostListener('click') // Escuta o evento click no html
  onClick() {
    alert(this._task.nome);
  }


}
