import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { ElectronService } from 'ngx-electron';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Elite-Gamer';
  constructor(private router: Router, private electronService: ElectronService,  private ngzone: NgZone) {
  }

  ngOnInit() {
    this.electronService.ipcRenderer.on('login-Success', () => {
      this.ngzone.run(() => {
        this.router.navigate(['dashboard'], { skipLocationChange: true });
      });
    });

    this.electronService.ipcRenderer.on('system-config', (event,args) => {
      console.log('get data');
      console.log(args);
     });
  }
}







      // this.router.navigate(['dashboard']);
