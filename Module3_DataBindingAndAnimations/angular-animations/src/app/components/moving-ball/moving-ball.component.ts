import { Component, OnInit } from '@angular/core';
import {ballMovementAnimations} from '../../animations/animateBall';

@Component({
  selector: 'app-moving-ball',
  templateUrl: './moving-ball.component.html',
  styleUrls: ['./moving-ball.component.css'],
  animations: [ballMovementAnimations] // provid ethe name of the animation that you created
})
export class MovingBallComponent implements OnInit {

  ballPosition = 'false'; // means say for ex ball is in left side
  constructor() { }

  ngOnInit(): void {
  }

  toggleBall() {
    this.ballPosition = (this.ballPosition == 'false') ? 'true' : 'false';
  }
}
