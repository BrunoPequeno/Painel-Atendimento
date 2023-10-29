import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {
  voos: any[] = [];
  startIndex = 0;
  displayedVoos: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getVoos().subscribe((data:any) => {
      this.voos = data;
      this.updateDisplayedVoos();

      setInterval(() => {
        this.updateDisplayedVoos();
      }, 10000); 
    });
  }

  updateDisplayedVoos() {
    this.displayedVoos = [];

    for (let i = this.startIndex; i < this.startIndex + 8; i++) {
      if (i < this.voos.length) {
        this.displayedVoos.push(this.voos[i]);
      }
    }

    this.startIndex += 8;

    if (this.startIndex >= this.voos.length) {
      this.startIndex = 0;
    }
  }
}