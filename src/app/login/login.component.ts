import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Common } from "../commonservice";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {//implements OnInit {
  email
  password
  message
  constructor(private Http2:HttpClient,private cs:Common) { }

  //ngOnInit() {
  //}
  funtnlog(){
    console.log("login clicked")
    var url="http://localhost:4444/login"
    this.Http2.post(url,{
        "email":this.email,
      "password":this.password,
    }).subscribe((res)=>{//lemda expression(arrow functions) function(res){ }==(res)=>{ }
    console.log("response from api",res)
    this.cs.isloggedin=true;
    console.log( this.cs.isloggedin)
    this.cs.username=this.email
    this.cs.userimage="‪E:/wallpapers/bulb-close-up-crack-40889.jpg"
    this.message=res["msg"]
    localStorage.setItem("currentuser",res["email"])
    },(err)=>{
        console.log("Network error",err)
    })
}

}
