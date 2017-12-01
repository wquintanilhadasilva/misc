import { ControlValueAccessor } from '@angular/forms';

export abstract class ValueAccessorBase<T> implements ControlValueAccessor {

  private innerValue: T;
  onChange = (value: T) => {};
  onTouched = () => {};

  get value(): T {
    return this.innerValue;
  }

  set value(value: T) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      // informação da view para o  controller
      this.onChange(value);
    }
  }

  writeValue(value: T) {
    // informação do controller para a view
    this.innerValue = value;
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
