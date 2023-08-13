import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheersCounterComponent } from './cheers-counter.component';

describe('CheersCounterComponent', () => {
  let component: CheersCounterComponent;
  let fixture: ComponentFixture<CheersCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheersCounterComponent]
    });
    fixture = TestBed.createComponent(CheersCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
