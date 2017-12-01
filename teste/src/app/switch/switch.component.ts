import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})

export class SwitchComponent implements ControlValueAccessor {

  @Input() label = 'switch';
  @Input() _value = false;

  onChange: any = () => { console.log('onChange'); };
  onTouched: any = () => { console.log('onTouched'); };

  get value() {
    console.log(`get value ${this._value}`);
    return this._value;
  }

  set value(val) {
    console.log(`set value ${val}`);
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor() { }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    console.log(`writevalue ${value}`);
    this.value = value;
    if (value) {
    }
  }

  switch() {
    this.value = !this.value;
  }

}
