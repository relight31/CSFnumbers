import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'numbers';
  numbers: number[] = []
  historyVisible = true
  startNumber = 1

  ngOnInit(): void {
      this.startNumber = Math.floor(Math.random()*31)
  }

  receivedClick($event:number){
    console.log("received click for ", $event.toString())
    this.historyVisible = false
    this.numbers.push($event)
  }

  removeNumber(number:number){
    console.log("removing ",number)
  }
}
