import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  obj:any={}
  constructor(private http : HttpClient) { }
  postStudent(data : any){

      return this.http.post<any>("http://localhost:3000/StudentDetails/",data)
      .pipe(map((res:any)=>{
        return res;
      }))
  }
  getStudent(){

    return this.http.get<any>("http://localhost:3000/StudentDetails")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateStudent(data:any,id:number){
   
    return this.http.put<any>("http://localhost:3000/StudentDetails/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
  deleteStudent(id:number){
    return this.http.delete<any>("http://localhost:3000/StudentDetails/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  setData(data:any){
    this.obj=data;
  }
  getData(){
    return this.obj;
  }
}
