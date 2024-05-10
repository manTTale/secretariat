import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryDeleteSecretaryByIdComponent } from './secretary-delete-secretary-by-id.component';

describe('SecretaryDeleteSecretaryByIdComponent', () => {
  let component: SecretaryDeleteSecretaryByIdComponent;
  let fixture: ComponentFixture<SecretaryDeleteSecretaryByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryDeleteSecretaryByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryDeleteSecretaryByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
