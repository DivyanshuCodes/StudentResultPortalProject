import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
public signupForm!:FormGroup;
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      username:['',Validators.required],email:['',Validators.required,],password:['',Validators.required]
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/SignupUsers",this.signupForm.value)
    .subscribe(res=>{
      alert("Student added succesdfully");
      this.signupForm.reset();
      this.router.navigate(['Login'])
    },err=>{
      alert("Someting went wrong!");
    });
      
  }
  }


