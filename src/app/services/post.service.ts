import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class PostService {

  constructor(private http:Http) { }

  sendPostData(postData){
    this.http.post('http://localhost:3000/register',postData)
   .subscribe(res=>{
    console.log(res)
   })
  }
}
