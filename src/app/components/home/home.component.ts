import { Component, OnInit } from '@angular/core';
import { DefaultGames } from '../../models/gameData';
import { Router } from '@angular/router';
import { ElectronService } from 'ngx-electron';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  showSystemConfig=false;
  gamesData;
  systemDetails={};
  constructor(private router: Router, private electronService: ElectronService) {
    this.gamesData = DefaultGames;
  }

  ngOnInit() { 
    

  }

  onGameClick(gameID) {
    console.log('route');
    this.router.navigate(['performance'], { queryParams: { gameID: gameID } });
  }

  onLogin() {
    this.electronService.ipcRenderer.send('login-user');
  }

  onLauchApp(){
    this.electronService.ipcRenderer.send('launch-chrome');
  }
  onShowSystemConfig(){
    this.electronService.ipcRenderer.send('show-system-config');
    this.electronService.ipcRenderer.on('system-config', (event,args) => {
      console.log('get data');
     this.systemDetails=args;
     this.showSystemConfig=true;
      console.log(args);
     });
  }
}
