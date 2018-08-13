import { Component } from '@angular/core';
import { Server } from './server.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    new Server(
      "test server",
      'server',
      "Content: " + 'test content',
    ),
    new Server(
      "test server",
      'server',
      "Content: " + 'test content',
    ),
  ];

}
