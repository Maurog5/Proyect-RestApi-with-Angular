import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryServiceComponent } from './country-service.component';

describe('CountryServiceComponent', () => {
  let component: CountryServiceComponent;
  let fixture: ComponentFixture<CountryServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryServiceComponent]
    });
    fixture = TestBed.createComponent(CountryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
