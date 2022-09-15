import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  employee:any
  constructor(public matDialog: MatDialogRef<EditEmployeeComponent>, public formBuilder: FormBuilder, public services: EmployeeService) { 
    this.employee=this.services.employee
  }

  ngOnInit(): void {
  }

  submitted=false
  deleteEmployee(){
    this.submitted = true
    this.services.deleteEmployee(this.employee.uid).then(res=>{
      console.log("Deleted Successully");
      this.submitted = false
      this.closedDialog()
    })
  }
  closedDialog() {
    this.matDialog.close()
  }

}
