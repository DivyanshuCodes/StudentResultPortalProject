import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { StudentModel } from './teacher.model';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
  
})
export class TeacherComponent implements OnInit {
  formValue !:FormGroup;
  studentModelObj :StudentModel=new StudentModel();
  studentData!: any;
  showAdd!:boolean;
  showUpdate!:boolean;
  constructor(private formbuilder: FormBuilder,private api:ApiService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.formValue= this.formbuilder.group(
      {
        rollNo:[''],name:[''],dob:[''],score:['']
      }
    )
    this.getAllStudents();
  }
  postStudentDetails(){

    this.studentModelObj.rollNo = this.formValue.value.rollNo;

    this.studentModelObj.name = this.formValue.value.name;

    this.studentModelObj.dob = this.formValue.value.dob;

    this.studentModelObj.score = this.formValue.value.score;

    this.api.postStudent(this.studentModelObj)

    .subscribe((res:any)=>{

        console.warn(res);

        alert("Student added succesdfully")
        let ref=document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllStudents();

    })

  }
  getAllStudents(){
    this.api.getStudent().subscribe(res=>{
      this.studentData=res;
    })
  }
  deleteStudents(loop:any){
    this.api.deleteStudent(loop.id).
    subscribe(res=>{alert("Record deleted");
  this.getAllStudents();})
  }
  editStudents(loop:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.studentModelObj.id=loop.id;
    this.formValue.controls['rollNo'].setValue(loop.rollNo);
    this.formValue.controls['name'].setValue(loop.name);
    this.formValue.controls['dob'].setValue(loop.dob);
    this.formValue.controls['score'].setValue(loop.score);
  }
  updateStudentDetails()
  {
    this.studentModelObj.rollNo = this.formValue.value.rollNo;
    this.studentModelObj.name = this.formValue.value.name;
    this.studentModelObj.dob = this.formValue.value.dob;
    this.studentModelObj.score = this.formValue.value.score;

    this.api.updateStudent(this.studentModelObj,this.studentModelObj.id).subscribe(res=>{

      alert('Updated Successfully');
      let ress = document.getElementById('cancel');
      ress?.click();
      this.formValue.reset();
      this.getAllStudents();
    })
  }  
  clickAddStudent(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
}

