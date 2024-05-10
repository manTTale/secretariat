import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryApiComponent } from './secretary-api.component';

describe('SecretaryApiComponent', () => {
  let component: SecretaryApiComponent;
  let fixture: ComponentFixture<SecretaryApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
