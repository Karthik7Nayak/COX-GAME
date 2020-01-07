import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverPath: string;
  constructor(private http: HttpClient) {
    this.serverPath = 'http://99.79.142.21:3005';
  }

  getMapDataWithGameIDfilters(game_id, numberOfConnections) {
    return this.http.get<any[]>(`${this.serverPath}/api/get-path-finder-data-v3?numberOfConnection=${numberOfConnections}&game_id=${game_id}`);
  }

}
