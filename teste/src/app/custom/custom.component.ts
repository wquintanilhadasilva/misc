import { Component, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { ValueAccessorBase } from './value-accessor';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomComponent,
    multi: true,
  }]
})
export class CustomComponent extends ValueAccessorBase<DadosEnvio> implements OnInit {

  @ViewChild(NgModel) dadosEnvio: NgModel;

  teste;

  public ngOnInit(): void {
      console.log('init');
  }

  handleInput(prop, value) {
      if (!this.value) {
          this.value = new DadosEnvio();
      }
      this.value[prop] = value;
      this.value = { ...this.value };
  }

 }
 export class DadosEnvio {
     nome: string;
     email: string;
     telefone: string;

     constructor() {}
 }
