import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  obj:any={}
  constructor() { }
  setData(data:any)
  {
    this.obj=data;
  }
  getData()
  {
    return this.obj;
  }
}
