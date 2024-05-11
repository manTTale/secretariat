import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryReviewDocumentComponent } from './secretary-review-document.component';

describe('SecretaryReviewDocumentComponent', () => {
  let component: SecretaryReviewDocumentComponent;
  let fixture: ComponentFixture<SecretaryReviewDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryReviewDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryReviewDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
