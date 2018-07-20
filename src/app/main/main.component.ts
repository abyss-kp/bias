import { Component, OnInit } from '@angular/core';
import { Common } from '../commonservice';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private cs2:Common){

  }

  ngOnInit() {
  }
  showdiv =this.cs2.isloggedin;
  showhide(){
    this.showdiv = this.showdiv;
   }
}
