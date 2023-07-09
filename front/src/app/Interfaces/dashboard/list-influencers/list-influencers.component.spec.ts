import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfluencersComponent } from './list-influencers.component';

describe('ListInfluencersComponent', () => {
  let component: ListInfluencersComponent;
  let fixture: ComponentFixture<ListInfluencersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListInfluencersComponent]
    });
    fixture = TestBed.createComponent(ListInfluencersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
