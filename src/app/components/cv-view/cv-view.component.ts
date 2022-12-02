import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'paisley-cv-view',
  templateUrl: './cv-view.component.html',
  styleUrls: ['./cv-view.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CvViewComponent {
  @Input() userCvData: FormGroup = new FormGroup({});
}
