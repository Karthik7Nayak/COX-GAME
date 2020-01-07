import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GamePerformanceComponent } from './components/game-performance/game-performance.component';
import { TraceRouteComponent } from './components/game-performance/trace-route/trace-route.component';
import { GameStatisticsComponent } from './components/game-performance/game-statistics/game-statistics.component'
import { DataLogComponent } from './components/game-performance/data-log/data-log.component';
import { DataGraphComponent } from './components/game-performance/data-graph/data-graph.component';
import { ChartStatisticsComponent } from './components/game-performance/chart-statistics/chart-statistics.component';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },

  {
    path: 'performance', component: GamePerformanceComponent,
    children: [
      { path: 'traceRoute', component: TraceRouteComponent },
      { path: 'stats', component: GameStatisticsComponent },
      { path: 'dataLog', component: DataLogComponent },
      { path: 'dataGraph', component: DataGraphComponent },
      { path: 'chartStat', component: ChartStatisticsComponent },
      { path: '', component: GameStatisticsComponent, pathMatch: 'full' },


    ]
  },
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
