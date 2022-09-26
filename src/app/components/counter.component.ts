import { Component, OnInit, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  // OnInit is a lifecycle hook
  // Class is created before Angular does attribute binding
  @Input()
  set currNumber(n:number){
    console.log(">>> ", n)
    this._currNumber = n
    this.updateImage()
  }
  get currNumber(){
    return this._currNumber
  }
  // getter and setter together represent the currNumber attribute

  _currNumber = 0
  image!: string 
  // the ! tells typescript you will initialise this elsewhere eg in OnInit
  mouseover = false

  constructor() { }

  ngOnInit(): void {
    // best to initialise your attributes here esp if binding involved
    console.info(">>>> ", this._currNumber)
    this.updateImage()
  }

  private updateImage(){
    this.image = "/assets/numbers/number"+this._currNumber.toString()+".jpg"
  }
  imageClass(mouseover:boolean):string{
    if (mouseover) {
      return "number-mouseover";
    } else {
      return "number";
    }
  }

  cursorOnImage(){
    this.mouseover=true
  }
  cursorOutImage(){
    this.mouseover=false
  }

  clickNext(){
    this.currNumber++
    this.currNumber%=31
    console.log(this.currNumber)
  }

  clickPrev(){
    this.currNumber--
    if (this.currNumber<0) {
      this.currNumber=30
    }
    console.log(this.currNumber)
  }

  @Output()
  displayedNumber = new Subject<number>()
  // the <number> represents the event object type

  clickImage(){
    console.log("clicked image number ",this.currNumber)
    this.displayedNumber.next(this.currNumber)
    // .next() contains payload
  }
}
