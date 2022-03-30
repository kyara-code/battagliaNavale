import { RestartService } from './../restart.service';
import { Cell } from './../cell.model';
import { ShipManage } from './../shipManager.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-hit-manually',
  templateUrl: './hit-manually.component.html',
  styleUrls: ['./hit-manually.component.css']
})
export class HitManuallyComponent implements OnInit {

  letterSelected: string = '';
  letter: string = '';
  numberSelected: string = '';
  errore: string = '';

  @Input() listLetters: string[] = [];
  @Input() listNumbers: string[] = [];
  @Output() cellEmitted = new EventEmitter<Cell>();

  constructor(public shipManage: ShipManage,
    public restart: RestartService) { }

  ngOnInit(): void {
  }

  onManualHit() {
    switch(this.letterSelected) {
      case 'a':
        this.letter = '1';
        this.errore = '';
        break;
      case 'b':
        this.letter = '2';
        this.errore = '';
        break;
      case 'c':
        this.letter = '3';
        this.errore = '';
        break;
      case 'd':
        this.letter = '4';
        this.errore = '';
        break;
      case 'e':
        this.letter = '5';
        this.errore = '';
        break;
      case 'f':
        this.letter = '6';
        this.errore = '';
        break;
      case 'g':
        this.letter = '7';
        this.errore = '';
        break;
      case 'h':
        this.letter = '8';
        this.errore = '';
        break;
      case 'i':
        this.letter = '9';
        this.errore = '';
        break;
      case 'j':
        this.letter = '10';
        this.errore = '';
        break;
      default:
        this.errore = 'Inserisci una posizione valida!';
    }

    for(let i = 0; i <= 10; i++) {
      for(let j = 0; j <= 10; j++) {
        if(this.shipManage.cells[i][j].position === this.numberSelected+this.letter 
          && this.shipManage.cells[i][j].status==='not hit'
          && !this.restart.gameOver
          && !this.restart.allCompleted) {

          this.shipManage.cells[i][j].status = 'hit';
          this.cellEmitted.emit(this.shipManage.cells[i][j]);
          }
        }
      }
    
    }

}
