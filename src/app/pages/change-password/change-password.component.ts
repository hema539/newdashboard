import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
popup:boolean =false
changePasswordForm :FormGroup
   submitted =false;
  constructor(private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
  });
  }

  get f() { return this.changePasswordForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.popup =true;
    // stop here if form is invalid
    if (this.changePasswordForm.invalid) {

       console.log("form invalid");
    }
    else 
    {
      this.popup =true;
    }
  }

}
