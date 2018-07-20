import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {//implements OnInit {

  constructor(private Http1:HttpClient) { }

  /*ngOnInit() {

  }*/
  funtn1(){
    console.log("signup clicked")
    var url="http://localhost:4444/signup"
    this.Http1.post(url,{
      "email":this.email,
      "password":this.password,
      "name":this.name,
      "phone":this.phone, 
    }).subscribe((res)=>{
      console.log("response from api",res)
    this.message=res["msg"]
    },(err)=>{
      console.log("Network error",err)
    })
  }
  email
  name
  phone
  password
message
}
