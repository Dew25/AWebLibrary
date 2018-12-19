import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  loginForm: FormGroup;
    private void;
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      login: [null],
      password: [null]
    });
  }
  public onSubmit(): void {
    const controls = this.loginForm.controls;
    console.log(controls.login.value);
    console.log(controls.password.value);
  }

}
