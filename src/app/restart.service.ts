import { ShipManage } from './shipManager.service';
import { Injectable} from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class RestartService {
    
    counterLives: number = 10;
    gameOver: boolean = false;
    allCompleted: boolean = false;

    startGame: boolean = false;

    livesArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    incrociatori: number[] = [1, 2];
    torpedinieri: number[] = [1, 2, 3];
    sommergibili: number[] = [1, 2, 3, 4];

    constructor(public shipManage: ShipManage) {}

    onRestart() {
        this.gameOver = false;
        this.allCompleted = false;
        this.counterLives = 10;

        this.shipManage.portaereiCounter = 4;
        this.shipManage.incrociatoriCounter = 6;
        this.shipManage.torpedinieriCounter = 6;
        this.shipManage.sommergibiliCounter = 4;
        this.incrociatori = [1, 2];
        this.torpedinieri = [1, 2, 3];
        this.sommergibili = [1, 2, 3, 4];

        this.livesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
}