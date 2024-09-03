import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],password:['',Validators.required]
    })
  }
  loginUser()
  {
  this.http.get<any>("http://localhost:3000/SignupUsers")
  .subscribe((res:any)=>{
  const user=res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user)
      {
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['Teacher']);
      }
      else{
        alert("User not found");
      }
    },err=>{
        alert("Someting went wrong!"); 
    })
  }

}
