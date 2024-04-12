import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;
  formStatus: Boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', Validators.required],
      position: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
    });
  }
  submitForm() {
    console.log(this.employeeForm, this.employeeForm.value);
    if (this.employeeForm.valid) {
      this.formStatus = true;
      console.log('Form Submitted:', this.employeeForm.value);
      // You can add further logic here to handle form submission, like sending data to a server
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
