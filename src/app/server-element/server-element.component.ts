import { Component, OnInit,Input, ViewEncapsulation} from '@angular/core';
import { Server } from '../server.model';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') server : Server;
  // @Input() server: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
