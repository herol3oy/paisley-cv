import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CvForm } from '../../models/cv-form';

@Component({
  selector: 'paisley-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class CvFormComponent {
  cvForm: FormGroup<CvForm> = new FormGroup<CvForm>({
    name: new FormControl<string>('', Validators.required),
    surname: new FormControl<string>('', Validators.required),
    title: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    mobile: new FormControl<string>('', Validators.required),
    city: new FormControl<string>('', Validators.required),
    country: new FormControl<string>('', Validators.required),
    personalWebsite: new FormControl<string>('', Validators.required),
    github: new FormControl<string>('', Validators.required),
    linkedin: new FormControl<string>('', Validators.required),
    profile: new FormControl<string>('', Validators.required),
  });

  @Output() cvFormData = new EventEmitter<FormGroup<CvForm>>();

  emitCvForm(): void {
    this.cvFormData.emit(this.cvForm);
  }
}
