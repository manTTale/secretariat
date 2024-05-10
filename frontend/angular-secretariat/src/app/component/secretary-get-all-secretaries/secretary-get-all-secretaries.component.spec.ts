import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryGetAllSecretariesComponent } from './secretary-get-all-secretaries.component';

describe('SecretaryGetAllSecretariesComponent', () => {
  let component: SecretaryGetAllSecretariesComponent;
  let fixture: ComponentFixture<SecretaryGetAllSecretariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryGetAllSecretariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryGetAllSecretariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
