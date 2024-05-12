import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSecretaryComponent } from './update-secretary.component';

describe('UpdateSecretaryComponent', () => {
  let component: UpdateSecretaryComponent;
  let fixture: ComponentFixture<UpdateSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSecretaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
