import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialAddSecretaryComponent } from './tutorial-add-secretary.component';

describe('TutorialAddSecretaryComponent', () => {
  let component: TutorialAddSecretaryComponent;
  let fixture: ComponentFixture<TutorialAddSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialAddSecretaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialAddSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
