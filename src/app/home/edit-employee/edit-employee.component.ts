import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent{

  employeeForm: FormGroup = new FormGroup({});


  constructor(public matDialog: MatDialogRef<EditEmployeeComponent>, public formBuilder: FormBuilder,public services:EmployeeService) {
    this.createForm()
  }
  ngOnInit(): void {
  }


  public createForm() {
    this.employeeForm = this.formBuilder.group({
      name: [this.services.employee.name, [Validators.required]],
      email: [this.services.employee.email, [Validators.required]]
    })
    console.log(this.employeeForm);

  }
  submitted=false
  updateEmployee(formData: any) {
    console.log(formData);
    this.submitted = true
    console.log(formData);
    let empObj = {
      name: formData.name,
      email: formData.email,
      updatedAt: new Date(),
    }
    this.services.updateEmployee(this.services.employee.uid,empObj).then((res: any) => {
      console.log(res);
      this.submitted = false
      this.closedDialog();
    })
  }


  closedDialog() {
    this.matDialog.close()
  }

}
