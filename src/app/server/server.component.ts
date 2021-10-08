import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  serverName: string = 'Alex';
  serverId: Number = 10;
  serverStatus : string = 'online';

  getServerName(): string {
    return this.serverName;
  }
  
}