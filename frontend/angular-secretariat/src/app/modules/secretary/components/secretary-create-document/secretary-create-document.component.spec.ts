import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryCreateDocumentComponent } from './secretary-create-document.component';

describe('SecretaryCreateDocumentComponent', () => {
  let component: SecretaryCreateDocumentComponent;
  let fixture: ComponentFixture<SecretaryCreateDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryCreateDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryCreateDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
