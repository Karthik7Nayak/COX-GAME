import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLogComponent } from './data-log.component';

describe('DataLogComponent', () => {
  let component: DataLogComponent;
  let fixture: ComponentFixture<DataLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
