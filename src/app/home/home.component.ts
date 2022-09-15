import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteComponent } from './delete/delete.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  employeeList:any=[];
  constructor(public dialog: MatDialog, public services: EmployeeService, public authservice:AuthService){
    this.getEmployee()
  }
  displayedColumns: string[] = ['empId', 'name', 'email', 'action'];
  dataSource = new MatTableDataSource(this.employeeList);
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getEmployee(){
    this.services.getAllEmployee().subscribe((res:any)=>{      
      this.employeeList = res.map((item: any) => {
        return {
          uid: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
      });
      console.log(this.employeeList);
      this.dataSource = new MatTableDataSource(this.employeeList);
    })
    console.log(this.employeeList);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: "340px",
      height: "100%",
      position: {
        right: "0",
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditDialog(data: any) {
    this.services.employee=data
    const dialogRef = this.dialog.open(EditEmployeeComponent, {
      width: "340px",
      height: "100%",
      position: {
        right: "0",
      },
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  delete(data:any){
    console.log(data);
      this.services.employee = data
      const dialogRef = this.dialog.open(DeleteComponent, {
        width: "340px",
        // height: "100%",
        position: {
          // right: "0",
        },
        data: data
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }
}


