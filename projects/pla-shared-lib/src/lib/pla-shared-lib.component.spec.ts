import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaSharedLibComponent } from './pla-shared-lib.component';

describe('PlaSharedLibComponent', () => {
  let component: PlaSharedLibComponent;
  let fixture: ComponentFixture<PlaSharedLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaSharedLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaSharedLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
