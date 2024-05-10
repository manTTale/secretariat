import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryAddSecretaryComponent } from './secretary-add-secretary.component';

describe('SecretaryAddSecretaryComponent', () => {
  let component: SecretaryAddSecretaryComponent;
  let fixture: ComponentFixture<SecretaryAddSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryAddSecretaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryAddSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
