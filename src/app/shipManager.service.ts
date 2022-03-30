import { Cell } from './cell.model';
import { EventEmitter, Injectable } from "@angular/core";

//gestisce la creazione delle navi e conta quante ne rimangono di ogni tipologia:
//in particolare contiene l'algoritmo di posizionamento casuale
@Injectable({
    providedIn: 'root'
})

export class ShipManage {
    cells: any = [];
    incrCounterChanged = new EventEmitter<number>();
    torpCounterChanged = new EventEmitter<number>();
    sommCounterChanged = new EventEmitter<number>();

    portaereiCounter: number = 4;
    incrociatoriCounter: number = 6;
    torpedinieriCounter: number = 6;
    sommergibiliCounter: number = 4;

    lunghezzaIncr: number = 2;
    lunghezzaTorp: number = 3;
    lunghezzaSomm: number = 4;

    createShipCells() {
        
      this.lunghezzaIncr = Math.ceil(this.incrociatoriCounter/3);
      this.lunghezzaTorp = Math.ceil(this.torpedinieriCounter/2);
      this.lunghezzaSomm = this.sommergibiliCounter;

        //creazione dell'array cells
        for(let i = 0; i <= 10; i++) {
          let cellRow: Cell[] = [];
          for(let j = 0; j <= 10; j++) {
            cellRow.push({
              position: i.toString()+j.toString(),
              type: 'sea',
              status: 'not hit'
            });
          }
          this.cells[i] = cellRow;
        }
        //posizionamento casuale dei sommergibili
        //NOTA: l'algoritmo è RESTRITTIVO: ad esempio non potrò mai avere un torpediniere in a1+b1
        for(let i = 0; i < 4; i++) {
          let x = Math.floor(Math.random()*10 +1);
          let y = Math.floor(Math.random()*10 +1);
          this.cells[x][y].type = 'sommergibile';
        }
        //posizionamento casuale dei torpedinieri
        for(let i = 0; i < 3; i++) {
          let x = Math.floor(Math.random()*8 + 2);
          let y = Math.floor(Math.random()*8 + 2);
          if(this.cells[x][y].type === 'sea') {
            let direzione = Math.floor(Math.random()*4); //dove: 0 = sinistra, 1 = alto, 2 = destra, 3 = in basso
            if(direzione === 0 &&
              this.cells[x-1][y].type === 'sea') {
              this.cells[x][y].type = 'torpediniere';
              this.cells[x-1][y].type = 'torpediniere';
            }
            else if(direzione === 1 &&
              this.cells[x][y-1].type === 'sea') {
              this.cells[x][y].type = 'torpediniere';
              this.cells[x][y-1].type = 'torpediniere';
            }
            else if(direzione === 2 &&
              this.cells[x+1][y].type === 'sea') {
              this.cells[x][y].type = 'torpediniere';
              this.cells[x+1][y].type = 'torpediniere';
            }
            else if(direzione === 4 &&
              this.cells[x][y+1].type === 'sea') { 
              this.cells[x][y].type = 'torpediniere';
              this.cells[x][y+1].type = 'torpediniere'; 
            }
            else { i--; }
          }
          else { i--;}
        }

        //posizionamento casuale degli incrociatori
        for(let i = 0; i < 2; i++) {
          let x = Math.floor(Math.random()*6 + 3);
          let y = Math.floor(Math.random()*6 + 3);
          if(this.cells[x][y].type === 'sea') {
            let direzione = Math.floor(Math.random()*4); //dove: 0 = sinistra, 1 = alto, 2 = destra, 3 = in basso
            if(direzione === 0  &&
              this.cells[x-1][y].type === 'sea' &&
              this.cells[x-2][y].type === 'sea') {
              this.cells[x][y].type = 'incrociatore';
              this.cells[x-1][y].type = 'incrociatore';
              this.cells[x-2][y].type = 'incrociatore';
            }
            else if(direzione === 1 &&
              this.cells[x][y-1].type === 'sea' &&
              this.cells[x][y-2].type === 'sea') {
              this.cells[x][y].type = 'incrociatore';
              this.cells[x][y-1].type = 'incrociatore';
              this.cells[x][y-2].type = 'incrociatore';
            }
            else if(direzione === 2 &&
              this.cells[x+1][y].type === 'sea' &&
              this.cells[x+2][y].type === 'sea') {
              this.cells[x][y].type = 'incrociatore';
              this.cells[x+1][y].type = 'incrociatore';
              this.cells[x+2][y].type = 'incrociatore';
            }
            else if(direzione === 4 &&
              this.cells[x][y+1].type === 'sea' &&
              this.cells[x][y+2].type === 'sea') { 
              this.cells[x][y].type = 'incrociatore';
              this.cells[x][y+1].type = 'incrociatore';
              this.cells[x][y+2].type = 'incrociatore'; 
            }
            else { i--; }
          }
          else { i--;}
        }

        //posizionamento casuale dei portaerei
        for(let i = 0; i<1; i++) {
        let x = Math.floor(Math.random()*4 + 4);
          let y = Math.floor(Math.random()*4 + 4);
          if(this.cells[x][y].type === 'sea') {
            let direzione = Math.floor(Math.random()*4); //dove: 0 = sinistra, 1 = alto, 2 = destra, 3 = in basso
            if(direzione === 0  &&
              this.cells[x-1][y].type === 'sea' &&
              this.cells[x-2][y].type === 'sea' &&
              this.cells[x-3][y].type === 'sea') {
              this.cells[x][y].type = 'portaerei';
              this.cells[x-1][y].type = 'portaerei';
              this.cells[x-2][y].type = 'portaerei';
              this.cells[x-3][y].type = 'portaerei';
            }
            else if(direzione === 1 &&
              this.cells[x][y-1].type === 'sea' &&
              this.cells[x][y-2].type === 'sea' &&
              this.cells[x][y-3].type === 'sea') {
              this.cells[x][y].type = 'portaerei';
              this.cells[x][y-1].type = 'portaerei';
              this.cells[x][y-2].type = 'portaerei';
              this.cells[x][y-3].type = 'portaerei';
            }
            else if(direzione === 2 &&
              this.cells[x+1][y].type === 'sea' &&
              this.cells[x+2][y].type === 'sea' &&
              this.cells[x+3][y].type === 'sea') {
              this.cells[x][y].type = 'portaerei';
              this.cells[x+1][y].type = 'portaerei';
              this.cells[x+2][y].type = 'portaerei';
              this.cells[x+3][y].type = 'portaerei';
            }
            else if(direzione === 4 &&
              this.cells[x][y+1].type === 'sea' &&
              this.cells[x][y+2].type === 'sea' &&
              this.cells[x][y+3].type === 'sea') { 
              this.cells[x][y].type = 'portaerei';
              this.cells[x][y+1].type = 'portaerei';
              this.cells[x][y+2].type = 'portaerei'; 
              this.cells[x][y+3].type = 'portaerei';
            }
            else { i--; }
          }
          else { i--;}
        }
    }
}