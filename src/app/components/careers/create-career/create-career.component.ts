import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CareerService } from '../career.service';
import { Router } from '@angular/router';
import { CreateCareer } from '../interfaces/createCareer';

@Component({
  selector: 'cb-create-career',
  templateUrl: './create-career.component.html',
  styleUrls: ['./create-career.component.css'],
})
export class CreateCareerComponent {
  form!: FormGroup;

  constructor(
    private service: CareerService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userId: [1],
      managerName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.minLength(3),
        ]),
      ],
      teamName: ['', [Validators.pattern(/(.|\s)*\S(.|\s)*/)]],
    });
  }

  createCareer() {
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate(['/list-careers']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/list-careers']);
  }

  enableButton(): string {
    if (this.form.valid) {
      return 'button';
    } else {
      return 'button__disabled';
    }
  }
}
