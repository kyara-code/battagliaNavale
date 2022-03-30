import { ShipManage } from './../shipManager.service';
import { RestartService } from './../restart.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cell } from '../cell.model';

@Component({
  selector: 'app-single-cell',
  templateUrl: './single-cell.component.html',
  styleUrls: ['./single-cell.component.css']
})
export class SingleCellComponent implements OnInit {

  @Input() whatToDisplay: string = '';
  @Input() position: string = '';
  @Input() cell?: Cell;
  
  constructor(public restart: RestartService,
    public shipManage: ShipManage) { }

  // configurazioni delle navi 
  @Output() cellTypeEmission = new EventEmitter<Cell>();

  ngOnInit(): void {
      
  }

  onClickSingleCell(){
    if(!this.restart.gameOver && !this.restart.allCompleted && this.cell?.status==='not hit'){
      this.cell = {
        position: this.cell.position,
        type: this.cell.type,
        status: 'hit'
      };
      this.cellTypeEmission.emit(this.cell);
    }
  }
  

}
