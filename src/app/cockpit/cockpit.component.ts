import { Component, OnInit } from '@angular/core';

import {Server} from  '../server.model';
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = "";
  newServerContent = "";
  SERVER = 'server';
  BLUEPRINT = 'blueprint';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    // this.servers.push(new Server(
    //   this.newServerName,
    //   this.SERVER,
    //   "Content: " + this.newServerContent,
    // ));
  }
  onAddServerBlueprint(){
    // this.servers.push(new Server(
    //   this.newServerName,
    //   this.BLUEPRINT,
    //   "Content: " + this.newServerContent
    // ));
  }

}
