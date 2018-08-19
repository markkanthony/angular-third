import { Component } from '@angular/core';
import { Server } from './server.model';
import { Data } from './Data.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  CONST_SERVER = 'server';
  CONST_BLUEPRINT = 'blueprint';
  servers = [];
  
  onServerAdded(serverData: Data){
    this.servers.push(new Server(
      serverData.serverName,
      this.CONST_SERVER,
      serverData.serverContent,
    ));
  }
  onBlueprintAdded(blueprintData:  Data){
    this.servers.push(new Server(
      blueprintData.serverName,
      this.CONST_BLUEPRINT,
      blueprintData.serverContent,
    ));
  }
}
