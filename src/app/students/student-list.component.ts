import { Component, OnInit } from '@angular/core';
import { IStudent } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  pageTitle:string = "Student list";
  listFilter:string = "";
  errorMessage = '';
  students : IStudent[] =[
   /* {
      "studentId":1,
      "studentName":"Anup",
      "address":"Thayyil",
      "email":"anup@gmail.com",
      "phone":"45454"
    },
    {
      "studentId":2,
      "studentName":"Mam",
      "address":"Mam Thayyil",
      "email":"mam@gmail.com",
      "phone":"66645454"
    },*/
 
  ];

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {

    console.log("In OnInit");
    this.studentService.getStudents().subscribe({
      next: students => {
        this.students = students;
        
      },
      error: err => this.errorMessage = err
    });
  }

}
