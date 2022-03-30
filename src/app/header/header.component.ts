import { RestartService } from './../restart.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() displayWhat = new EventEmitter<string>();

  constructor(public restart: RestartService) { }

  ngOnInit(): void {
  }

  onDisplayColor(cellType: string) {
    this.displayWhat.emit(cellType);
  }

  onStartPage() {
    this.restart.startGame = false;
  }

}
