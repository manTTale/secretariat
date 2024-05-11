import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryFooterComponent } from './secretary-footer.component';

describe('SecretaryFooterComponent', () => {
  let component: SecretaryFooterComponent;
  let fixture: ComponentFixture<SecretaryFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
