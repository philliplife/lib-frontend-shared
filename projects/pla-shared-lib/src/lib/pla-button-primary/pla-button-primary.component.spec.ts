import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaButtonPrimaryComponent } from './pla-button-primary.component';

describe('PlaButtonPrimaryComponent', () => {
  let component: PlaButtonPrimaryComponent;
  let fixture: ComponentFixture<PlaButtonPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaButtonPrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaButtonPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
