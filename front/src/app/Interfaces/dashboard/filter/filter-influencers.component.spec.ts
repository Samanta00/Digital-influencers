import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInfluencersComponent } from './filter-influencers.component';

describe('FilterInfluencersComponent', () => {
  let component: FilterInfluencersComponent;
  let fixture: ComponentFixture<FilterInfluencersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterInfluencersComponent]
    });
    fixture = TestBed.createComponent(FilterInfluencersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
