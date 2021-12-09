import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingBallComponent } from './moving-ball.component';

describe('MovingBallComponent', () => {
  let component: MovingBallComponent;
  let fixture: ComponentFixture<MovingBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingBallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
