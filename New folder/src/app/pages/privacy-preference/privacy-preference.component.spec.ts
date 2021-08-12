import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPreferenceComponent } from './privacy-preference.component';

describe('PrivacyPreferenceComponent', () => {
  let component: PrivacyPreferenceComponent;
  let fixture: ComponentFixture<PrivacyPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyPreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
