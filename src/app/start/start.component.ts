import { RestartService } from './../restart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  isAnimationOn: boolean = false;
  isSinking: boolean = false;
  seaClicks: number[] = [];
  isSeaClicked: boolean = false;

  constructor(public restart: RestartService) {}

  ngOnInit(): void {}

  onStartGame() {
    this.restart.startGame = true;
    this.isAnimationOn = true;
    this.isSinking = false;
    this.seaClicks = [];
    this.isSeaClicked = false;
  }

  onStopAnimation() {
    this.isAnimationOn = this.isAnimationOn ? false : true;
  }

  sailSink() {
    this.isSinking = true;
    this.isAnimationOn = true;
    this.seaClicks = [];
    this.isSeaClicked = false;
  }

  clickOnSea() {
    this.isSeaClicked = true;
    if (this.isSeaClicked) {
      this.seaClicks.push(1);
    }
  }

  onClean() {
    this.isAnimationOn = true;
    this.isSinking = false;
    this.seaClicks = [];
    this.isSeaClicked = false;
  }
}
