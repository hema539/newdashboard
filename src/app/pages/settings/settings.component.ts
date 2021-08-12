import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
   settingForm :FormGroup
   submitted =false;
  constructor(private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit() {
    this.settingForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
  });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.settingForm.invalid) {

       console.log("form Submitted");
    }

    

}

  

}
