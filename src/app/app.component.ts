import { ShipManage } from './shipManager.service';
import { RestartService } from './restart.service';
import { Component,  OnInit } from '@angular/core';
import { Cell } from './cell.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  indexes: string[] = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  letters: string[] = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  livesExpired: number[] = [];

  whatToDisplay: string = 'nothing';

  constructor(public restart: RestartService,
    public shipManage: ShipManage){}

  ngOnInit(): void {
    this.reset();
    this.shipManage.createShipCells();
  }

  onDisplayWhat(cellType: string) {
    this.whatToDisplay = cellType === 'nothing' ? 'nothing' : (cellType === 'sea' ? 'sea' : 'ship');
  }

  onCellHit(cellData: Cell) {

    if(cellData.type === 'sea') {
      this.restart.counterLives--;
      this.restart.livesArray.pop();
      this.livesExpired.push(1);
    }
    switch(cellData.type) {
      case 'portaerei':
        this.shipManage.portaereiCounter--;
        break;
      case 'incrociatore':
        this.shipManage.incrociatoriCounter--;
        this.shipManage.incrCounterChanged.emit(this.shipManage.incrociatoriCounter);
        break;
      case 'torpediniere':
        this.shipManage.torpedinieriCounter--;
        this.shipManage.torpCounterChanged.emit(this.shipManage.torpedinieriCounter);
        break;
      case 'sommergibile':
        this.shipManage.sommergibiliCounter--;
        this.shipManage.sommCounterChanged.emit(this.shipManage.sommergibiliCounter);
        break;
    }
    if(this.restart.counterLives == 0) {
      this.restart.gameOver = true;
    }
    if(this.shipManage.portaereiCounter === 0 &&
      this.shipManage.incrociatoriCounter === 0 &&
      this.shipManage.torpedinieriCounter === 0 &&
      this.shipManage.sommergibiliCounter === 0) {
       this.restart.allCompleted = true;
      }
  }

  reset(): void {
    this.shipManage.cells=[];

    this.restart.onRestart();
    this.shipManage.createShipCells();
    this.livesExpired = [];
  }

}
