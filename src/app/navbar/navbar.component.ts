import { Component, OnInit,DoCheck } from '@angular/core';
import { Common } from "../commonservice"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck {

  constructor(private cservice:Common) { }
  ngOnInit() {
  }
  ngDoCheck(){
    this.un =this.cservice.username
  this.ui="E:/wallpapers/bulb-close-up-crack-40889.jpg"
    this.il=this.cservice.isloggedin
 }
 
 ui
 il
 un
 }


