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

  formatarNumero(numero: number): string {
    return numero < 10 ? `0${numero}` : `${numero}`;
  }

  atualizarDataHora() {
    const agora = new Date();

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const dataFormatada = agora.toLocaleDateString('pt-BR', options);

    const horaFormatada = `${this.formatarNumero(agora.getHours())}:${this.formatarNumero(agora.getMinutes())}:${this.formatarNumero(agora.getSeconds())}`;

    this.dataAtual = `${dataFormatada} ${horaFormatada}`;
  }
}
