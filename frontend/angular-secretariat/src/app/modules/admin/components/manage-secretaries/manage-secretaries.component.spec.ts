import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSecretariesComponent } from './manage-secretaries.component';

describe('ManageSecretariesComponent', () => {
  let component: ManageSecretariesComponent;
  let fixture: ComponentFixture<ManageSecretariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSecretariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSecretariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
