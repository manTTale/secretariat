import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryUpdateSecretaryComponent } from './secretary-update-secretary.component';

describe('SecretaryUpdateSecretaryComponent', () => {
  let component: SecretaryUpdateSecretaryComponent;
  let fixture: ComponentFixture<SecretaryUpdateSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryUpdateSecretaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryUpdateSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
