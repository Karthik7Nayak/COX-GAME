import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePerformanceComponent } from './game-performance.component';

describe('GamePerformanceComponent', () => {
  let component: GamePerformanceComponent;
  let fixture: ComponentFixture<GamePerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
