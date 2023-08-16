import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesServiceComponent } from './favorites-service.component';

describe('FavoritesServiceComponent', () => {
  let component: FavoritesServiceComponent;
  let fixture: ComponentFixture<FavoritesServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesServiceComponent]
    });
    fixture = TestBed.createComponent(FavoritesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
