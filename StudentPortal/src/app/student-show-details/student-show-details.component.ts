import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-show-details',
  templateUrl: './student-show-details.component.html',
  styleUrls: ['./student-show-details.component.css']
})
export class StudentShowDetailsComponent implements OnInit {

  studentData:any=[];
  constructor(private student:StudentServiceService) { }
  ngOnInit(): void {
    this.studentData = this.student.getData();

    console.warn(this.studentData);
  }
}
