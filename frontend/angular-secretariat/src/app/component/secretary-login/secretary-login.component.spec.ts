import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryLoginComponent } from './secretary-login.component';

describe('SecretaryLoginComponent', () => {
  let component: SecretaryLoginComponent;
  let fixture: ComponentFixture<SecretaryLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
