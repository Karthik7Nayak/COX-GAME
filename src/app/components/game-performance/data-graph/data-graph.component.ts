import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// tslint:disable: max-line-length

export interface GameTableData {
  user: string;
  connections: number;
  game_location: string;
  game_city: string;
  server_location: string;
  server_city: string;
  server_speed: number;
}

const GAME_DATA: GameTableData[] = [
  {
    user: 'icesljal222', connections: 2, game_location: '68.0.179.113', game_city: 'Phoenix', server_location: '172.65.244.155', server_city: 'Chicago', server_speed: 0.10
  },
  {
    user: 'phoebette', connections: 3, game_location: '68.98.35.118', game_city: 'Phoenix', server_location: '192.64.174.65', server_city: 'California', server_speed: 0.20
  },
  {
    user: 'icesljal222', connections: 2, game_location: '68.0.179.113', game_city: 'Phoenix', server_location: '172.65.244.155', server_city: 'Chicago', server_speed: 0.10
  },
  {
    user: 'phoebette', connections: 3, game_location: '68.98.35.118', game_city: 'Phoenix', server_location: '192.64.174.65', server_city: 'California', server_speed: 0.20
  },
  {
    user: 'icesljal222', connections: 2, game_location: '68.0.179.113', game_city: 'Phoenix', server_location: '172.65.244.155', server_city: 'Chicago', server_speed: 0.10
  },
  {
    user: 'phoebette', connections: 3, game_location: '68.98.35.118', game_city: 'Phoenix', server_location: '192.64.174.65', server_city: 'California', server_speed: 0.20
  },
  {
    user: 'icesljal222', connections: 2, game_location: '68.0.179.113', game_city: 'Phoenix', server_location: '172.65.244.155', server_city: 'Chicago', server_speed: 0.10
  },
  {
    user: 'phoebette', connections: 3, game_location: '68.98.35.118', game_city: 'Phoenix', server_location: '192.64.174.65', server_city: 'California', server_speed: 0.20
  },
  {
    user: 'icesljal222', connections: 2, game_location: '68.0.179.113', game_city: 'Phoenix', server_location: '172.65.244.155', server_city: 'Chicago', server_speed: 0.10
  },
  {
    user: 'phoebette', connections: 3, game_location: '68.98.35.118', game_city: 'Phoenix', server_location: '192.64.174.65', server_city: 'California', server_speed: 0.20
  },
  {
    user: 'icesljal222', connections: 2, game_location: '68.0.179.113', game_city: 'Phoenix', server_location: '172.65.244.155', server_city: 'Chicago', server_speed: 0.10
  },
  {
    user: 'phoebette', connections: 3, game_location: '68.98.35.118', game_city: 'Phoenix', server_location: '192.64.174.65', server_city: 'California', server_speed: 0.20
  },


];

@Component({
  selector: 'app-data-graph',
  templateUrl: './data-graph.component.html',
  styleUrls: ['./data-graph.component.css']
})
export class DataGraphComponent implements OnInit {

  displayedColumns: string[];
  dataSource = new MatTableDataSource(GAME_DATA);

  constructor() {
    this.displayedColumns = [
      'user',
      'connections',
      'game_location',
      'game_city',
      'server_location',
      'server_city',
      'server_speed'
    ];
  }

  ngOnInit() {
  }

}
