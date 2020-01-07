import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
// tslint:disable max-line-length
import { ApiService} from '../../../services/api.service';


@Component({
  selector: 'app-data-log',
  templateUrl: './data-log.component.html',
  styleUrls: ['./data-log.component.css']
})
export class DataLogComponent implements OnInit {
  displayedColumns: string[];
  serverDetails;
  dataSource = new MatTableDataSource();
  constructor(private apiService: ApiService) {
    this.displayedColumns = [
      'user',
      'usid',
      'game_id',
      'game_name',
      'gsid',
      'conn_id',
      'src',
      'dst',
      'avg_direct_rtt',
      'avg_wtfast_rtt'
    ];
  }

  ngOnInit() {
    this.apiService.getMapDataWithGameIDfilters(7137, 1000).subscribe(res => {
      this.serverDetails = res;
      this.dataSource = new MatTableDataSource(res);
    });
  }
}
