import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListInfluencersComponent } from './list-influencers.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { of } from 'rxjs';

describe('ListInfluencersComponent', () => {
  let component: ListInfluencersComponent;
  let fixture: ComponentFixture<ListInfluencersComponent>;
  let formBuilder: FormBuilder;
  let dataService: ServicesService;
  let authService: ServicesService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListInfluencersComponent],
      providers: [FormBuilder, ServicesService]
    }).compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ListInfluencersComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    dataService = TestBed.inject(ServicesService);
    authService = TestBed.inject(ServicesService);
  
    spyOn(dataService, 'getAllPeople').and.returnValue(of([]));
    spyOn(authService, 'getEmail').and.returnValue('ellen.samanta@outlook.com');
    spyOn(authService, 'getSenha').and.returnValue('123');
  
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form groups', () => {
    expect(component.filtroForm).toBeInstanceOf(FormGroup);
    expect(component.editForm).toBeInstanceOf(FormGroup);
  });

  it('should call getRegistros on initialization', () => {
    expect(dataService.getAllPeople).toHaveBeenCalled();
  });

  it('should check user on initialization', () => {
    expect(authService.getEmail).toHaveBeenCalled();
    expect(authService.getSenha).toHaveBeenCalled();
    expect(component.isEllenUser).toBeTrue();
  });
});
