import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CvForm } from '../../models/cv-form';
import { MatSelectModule } from '@angular/material/select';
import { LanguageLevel } from '../../models/language-level';
import { InputFieldComponent } from '../common/input-field/input-field.component';

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
    MatSelectModule,
    InputFieldComponent,
  ],
})
export class CvFormComponent {
  cvForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    surname: ['', Validators.required],
    title: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    personalWebsite: ['', Validators.required],
    github: ['', Validators.required],
    linkedin: ['', Validators.required],
    profile: ['', Validators.required],
    interests: ['', Validators.required],
    userLanguages: this.fb.group({
      language: ['', Validators.required],
      languageLevel: ['', Validators.required],
    }),
    languages: this.fb.array([]),
    professionalExperience: this.fb.group({
      nameOfCompany: ['', Validators.required],
      jobTitle: ['', Validators.required],
      startEndDate: ['', Validators.required],
      jobLocation: ['', Validators.required],
    }),
    userProfessionalExperience: this.fb.array([]),
    projects: this.fb.group({
      projectTitle: ['', Validators.required],
      projectDescription: ['', Validators.required],
    }),
    userProjects: this.fb.array([]),
    education: this.fb.group({
      titleOfStudy: ['', Validators.required],
      placeOfStudy: ['', Validators.required],
      dateOfGraduation: ['', Validators.required],
    }),
    userEducation: this.fb.array([]),
  });

  userLanguageLevel: string[] = Object.values(LanguageLevel);

  constructor(private readonly fb: FormBuilder) {}

  @Output() cvFormData = new EventEmitter<FormGroup<CvForm>>();

  emitCvForm(): void {
    this.cvFormData.emit(this.cvForm);
  }

  get languages() {
    return this.cvForm.get('languages') as FormArray;
  }

  get proExperiences() {
    return this.cvForm.get('userProfessionalExperience') as FormArray;
  }

  get projects() {
    return this.cvForm.get('userProjects') as FormArray;
  }

  get education() {
    return this.cvForm.get('userEducation') as FormArray;
  }

  addLanguage(): void {
    this.languages.push(this.fb.group(this.cvForm.get('userLanguages')?.value));
    this.cvForm.get('userLanguages')?.reset();
  }

  addExperience(): void {
    this.proExperiences.push(
      this.fb.group(this.cvForm.get('professionalExperience')?.value)
    );
    this.cvForm.get('professionalExperience')?.reset();
  }

  addProject(): void {
    this.projects.push(this.fb.group(this.cvForm.get('projects')?.value));
    this.cvForm.get('projects')?.reset();
  }

  addEducation(): void {
    this.education.push(this.fb.group(this.cvForm.get('education')?.value));
    this.cvForm.get('education')?.reset();
  }
}
