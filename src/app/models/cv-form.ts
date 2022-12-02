import { FormArray, FormControl } from '@angular/forms';

export interface CvForm {
  readonly name: FormControl<string | null>;
  readonly surname: FormControl<string | null>;
  readonly title: FormControl<string | null>;
  readonly email: FormControl<string | null>;
  readonly mobile: FormControl<string | null>;
  readonly city: FormControl<string | null>;
  readonly country: FormControl<string | null>;
  readonly personalWebsite: FormControl<string | null>;
  readonly github: FormControl<string | null>;
  readonly linkedin: FormControl<string | null>;
  readonly profile: FormControl<string | null>;
  readonly interests: FormControl<string | null>;
  readonly languages: FormArray;
  // readonly languageLevel: FormArray;
}

export interface Language {
  readonly language: FormControl<string | null>;
  readonly level: FormControl<string | null>;
}
