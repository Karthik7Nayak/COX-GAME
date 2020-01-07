import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GamePerformanceComponent } from './components/game-performance/game-performance.component';
import { ChartStatisticsComponent } from './components/game-performance/chart-statistics/chart-statistics.component';
import { DataGraphComponent } from './components/game-performance/data-graph/data-graph.component';
import { DataLogComponent } from './components/game-performance/data-log/data-log.component';
import { GameStatisticsComponent } from './components/game-performance/game-statistics/game-statistics.component';
import { TraceRouteComponent } from './components/game-performance/trace-route/trace-route.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NgxElectronModule } from 'ngx-electron';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamePerformanceComponent,
    ChartStatisticsComponent,
    DataGraphComponent,
    DataLogComponent,
    GameStatisticsComponent,
    TraceRouteComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatTableModule,
    HttpClientModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
