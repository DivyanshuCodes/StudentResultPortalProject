import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';

import { Router } from '@angular/router';

import { ApiService } from '../shared/api.service';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  searchForm !:FormGroup;
  constructor(private formbuilder:FormBuilder,private router:Router, private http:HttpClient,private api:ApiService,private student:StudentServiceService) { }

  ngOnInit(): void {

    this.searchForm = this.formbuilder.group({
      rollNo:[''],
      dob:['']
    })
  }
  rollNo:any
  name:any
  dob:any
  score:any
  searchStudent():void
  {
    this.http.get<any>("http://localhost:3000/StudentDetails")

    .subscribe((res:any)=>{

      const users=res.find((a:any)=>{
        return a.rollNo ==this.searchForm.value.rollNo && a.dob ==this.searchForm.value.dob});  
      if(users){
        this.student.setData(users);
        this.searchForm.reset();
        this.router.navigate(['/StudentResult']);
      }else{
        
        alert("Student not found");
      }
    })   
  }
}
