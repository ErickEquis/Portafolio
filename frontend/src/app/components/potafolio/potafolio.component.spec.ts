import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotafolioComponent } from './potafolio.component';

describe('PotafolioComponent', () => {
  let component: PotafolioComponent;
  let fixture: ComponentFixture<PotafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotafolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
