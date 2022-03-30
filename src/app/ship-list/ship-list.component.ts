import { RestartService } from './../restart.service';
import { ShipManage } from './../shipManager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {

  constructor(public shipManage: ShipManage,
    public restart: RestartService)  {}

  ngOnInit(): void {
    this.shipManage.incrCounterChanged.subscribe(
      (lunghezza: number) => {
        if( Math.ceil(lunghezza/3) === 1) {
          this.restart.incrociatori = [1];
        }
        else if ( Math.ceil(lunghezza/3) === 0 ) {
          this.restart.incrociatori = [];
        }
      }
    );

    this.shipManage.torpCounterChanged.subscribe(
      (lunghezza: number) => {
        
        if( Math.ceil(lunghezza/2) === 2) {
          this.restart.torpedinieri = [1, 2];
        }
        else if ( Math.ceil(lunghezza/2) === 1 ) {
          this.restart.torpedinieri = [1];
        }
        else if ( Math.ceil(lunghezza/2) === 0 ) {
          this.restart.torpedinieri= [];
        }
      }
    );

    this.shipManage.sommCounterChanged.subscribe(
      (lunghezza: number) => {
        
        this.restart.sommergibili = [];
        for(let i = 0; i < lunghezza; i++) {
          this.restart.sommergibili.push(i);
        }
      }
    );
  }

}
