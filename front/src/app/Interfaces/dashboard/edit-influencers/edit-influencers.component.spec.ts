import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfluencersComponent } from './edit-influencers.component';

describe('EditInfluencersComponent', () => {
  let component: EditInfluencersComponent;
  let fixture: ComponentFixture<EditInfluencersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditInfluencersComponent]
    });
    fixture = TestBed.createComponent(EditInfluencersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
