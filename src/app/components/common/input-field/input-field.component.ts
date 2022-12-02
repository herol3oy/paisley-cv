import { Component, forwardRef, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'paisley-cv-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
})
export class InputFieldComponent implements ControlValueAccessor {
  _value = '';

  @Input() label = '';
  @Input() placeholder = '';

  // eslint-disable-next-line
  onChanged: any = () => {};
  // eslint-disable-next-line
  onTouched: any = () => {};

  // eslint-disable-next-line
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  // eslint-disable-next-line
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // eslint-disable-next-line
  writeValue(value: any): void {
    this._value = value;
  }
}
