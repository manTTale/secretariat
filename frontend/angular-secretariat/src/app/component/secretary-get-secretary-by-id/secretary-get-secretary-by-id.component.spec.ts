import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryGetSecretaryByIdComponent } from './secretary-get-secretary-by-id.component';

describe('SecretaryGetSecretaryByIdComponent', () => {
  let component: SecretaryGetSecretaryByIdComponent;
  let fixture: ComponentFixture<SecretaryGetSecretaryByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryGetSecretaryByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryGetSecretaryByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
