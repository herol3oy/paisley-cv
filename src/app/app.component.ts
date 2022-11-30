import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'paisley-cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userCvData: FormGroup = new FormGroup({});

  getCvFormDate(cvUserFormData: FormGroup): void {
    this.userCvData = cvUserFormData;
  }
}
