import { Component } from '@angular/core';
import { Common } from './commonservice';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cs2:Common){

  }
  title = 'app';
  showdiv =this.cs2.isloggedin;
  showhide(){
    this.showdiv = this.showdiv;
   }
}
