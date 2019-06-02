import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthservicesComponent } from './authservices.component';

describe('AuthservicesComponent', () => {
  let component: AuthservicesComponent;
  let fixture: ComponentFixture<AuthservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

