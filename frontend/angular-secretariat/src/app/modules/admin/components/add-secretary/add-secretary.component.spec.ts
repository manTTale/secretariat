import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecretaryComponent } from './add-secretary.component';

describe('AddSecretaryComponent', () => {
  let component: AddSecretaryComponent;
  let fixture: ComponentFixture<AddSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSecretaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
