import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import {Data} from '../data.model';
import {Server} from '../server.model';
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Data>();
  @Output() blueprintCreated  = new EventEmitter<Data>();
  newServerName= "";
  newServerContent = "";
  @ViewChild('serverNameInput') serverNameInput:ElementRef;
  @ViewChild('serverContentInput') serverContentInput:ElementRef;
  // list: Data[] = [
  //   new Data(this.newServerName,this.newServerContent),
  //   new Data(this.newServerName,this.newServerContent)
  // ];
  data: Data;
  // data: Data = new Data(this.newServerName,this.newServerContent);
  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    // this.data = new Data(this.newServerName,this.newServerContent);
    this.data = new Data(
      this.serverNameInput.nativeElement.value,
      this.serverContentInput.nativeElement.value,
    );
    this.serverCreated.emit(this.data);
  } 
  onAddServerBlueprint(){
    // this.data = new Data(this.newServerName,this.newServerContent);
    this.data = new Data(
      this.serverNameInput.nativeElement.value,
      this.serverContentInput.nativeElement.value,
    );
    this.blueprintCreated.emit(this.data);
  } 
}
