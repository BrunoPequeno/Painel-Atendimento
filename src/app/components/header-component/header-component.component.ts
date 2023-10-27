import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  dataAtual: string = "0";

  ngOnInit() {
    this.atualizarDataHora();

    setInterval(() => {
      this.atualizarDataHora();
    }, 1000);
  }

  atualizarDataHora() {
    const agora = new Date();
    const data = agora.toLocaleDateString();
    const hora = agora.toLocaleTimeString();
    this.dataAtual = `${data} ${hora}`;
  }
}
