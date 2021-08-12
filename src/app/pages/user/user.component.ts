import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: "app-user",
  templateUrl: "user.component.html",
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm: FormGroup
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value))
}
}
