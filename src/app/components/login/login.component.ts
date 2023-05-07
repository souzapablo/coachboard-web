import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginResponse } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nickname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.minLength(3),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.minLength(3),
        ]),
      ],
    });
  }

  enableButton(): string {
    if (this.form.valid) {
      return 'button';
    } else {
      return 'button__disabled';
    }
  }

  login() {
    if (this.form.valid) {
      this.service.login(this.form.value).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.userId.toString());
          localStorage.setItem('loggedIn', 'true');
          this.router.navigateByUrl('');
        },
        error: (err) => {
          this.service.logout();
          alert(JSON.stringify(err.error.detail));
        },
      });
    }
  }
}
