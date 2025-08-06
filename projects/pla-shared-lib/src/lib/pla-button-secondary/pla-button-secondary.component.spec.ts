import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaButtonSecondaryComponent } from './pla-button-secondary.component';

describe('PlaButtonSecondaryComponent', () => {
  let component: PlaButtonSecondaryComponent;
  let fixture: ComponentFixture<PlaButtonSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaButtonSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaButtonSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
