import { Component, OnInit } from '@angular/core';
import { ComponentButtonModel } from '../../models/componentButton';
@Component({
  selector: 'app-game-performance',
  templateUrl: './game-performance.component.html',
  styleUrls: ['./game-performance.component.css']
})
export class GamePerformanceComponent implements OnInit {

  componentModel = new ComponentButtonModel();
  constructor() {
    this.componentModel.showChartStatsComponent = false;
    this.componentModel.showDataLogComponent = false;
    this.componentModel.showGameStatsComponent = true;
    this.componentModel.showTraceRouteComponent = false;
    this.componentModel.showdataGraphcomponent = false;
  }

  ngOnInit() {
  }
  setComponentModel() {
    this.componentModel.showChartStatsComponent = false;
    this.componentModel.showDataLogComponent = false;
    this.componentModel.showGameStatsComponent = false;
    this.componentModel.showTraceRouteComponent = false;
    this.componentModel.showdataGraphcomponent = false;
  }
  onButtonClick(component) {
    this.setComponentModel()
    if (component === 'DATALOG') {
      this.componentModel.showDataLogComponent = true;
    } else if (component === 'TRACEROUTE') {
      this.componentModel.showTraceRouteComponent = true;

    } else if (component === 'STATS') {
      this.componentModel.showGameStatsComponent = true;

    } else if (component === 'DTATAGRAPH') {
      this.componentModel.showdataGraphcomponent = true;

    } else if (component === 'CHART') {
      this.componentModel.showChartStatsComponent = true;
    }
  }
}
