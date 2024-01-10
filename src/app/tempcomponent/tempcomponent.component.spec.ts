import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempcomponentComponent } from './tempcomponent.component';

describe('TempcomponentComponent', () => {
  let component: TempcomponentComponent;
  let fixture: ComponentFixture<TempcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TempcomponentComponent]
    });
    fixture = TestBed.createComponent(TempcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
