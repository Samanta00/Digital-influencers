import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInfluencersComponent } from './create-influencers.component';

describe('CreateInfluencersComponent', () => {
  let component: CreateInfluencersComponent;
  let fixture: ComponentFixture<CreateInfluencersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInfluencersComponent]
    });
    fixture = TestBed.createComponent(CreateInfluencersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
