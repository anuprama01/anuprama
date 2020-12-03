import { Component, OnInit } from '@angular/core';
import { IStudent } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  pageTitle:string = "Add Student";
  name:string = "";
  address:string = "";
  phone:string = "";
  email:string = "";
  student:IStudent;
  errorMessage = '';

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }
  onSave(): void {

    this.student  =
    {
      "studentId":0,
      "studentName":this.name,
      "address":this.address,
      "email":this.email,
      "phone":this.phone
    };
    alert(JSON.stringify(this.student));
    //this.studentService.addStudent(this.student);
    this.studentService.addStudent(this.student).subscribe({
      next: student => {
        this.student = student;
        
      },
      error: err => this.errorMessage = err
    });
  }
}
