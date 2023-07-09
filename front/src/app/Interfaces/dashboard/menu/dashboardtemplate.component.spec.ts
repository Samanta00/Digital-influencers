import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardtemplateComponent } from './dashboardtemplate.component';

describe('DashboardtemplateComponent', () => {
  let component: DashboardtemplateComponent;
  let fixture: ComponentFixture<DashboardtemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardtemplateComponent]
    });
    fixture = TestBed.createComponent(DashboardtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
