import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {
  voos: any[] = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getVoos().subscribe(data => {
      this.voos = data;
    });
  }
}