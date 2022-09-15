import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent{


  employeeForm: FormGroup = new FormGroup({});


  constructor(public matDialog: MatDialogRef<AddEmployeeComponent>, public formBuilder: FormBuilder, public services:EmployeeService) {
      this.createForm()
  }
  ngOnInit(): void {
  }


  public createForm() {
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
    console.log(this.employeeForm);
    
  }
  submitted=false
  addEmployee(formData: any) {
    this.submitted=true
    console.log(formData);
    let empObj={
      name:formData.name,
      email:formData.email,
      createdAt:new Date(),
      empId:new Date().getTime()
    }
    this.services.addEmployee(empObj).then((res:any)=>{
      console.log(res);
      this.submitted = false
      this.closedDialog();
    })

  }


ngOnChanges(changes: SimpleChanges): void {
  console.log(this.employeeForm);
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  
}

  closedDialog() {
    this.matDialog.close()
  }

}
