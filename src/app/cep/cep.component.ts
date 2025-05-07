import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // <-- IMPORTAR AQUI
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consulta-cep',
  standalone: true,
  templateUrl: './cep.component.html',
  imports: [CommonModule, FormsModule], // <-- ADICIONAR AQUI
})
export class ConsultaCepComponent {
  cep = '';
  resultado: any = null;
  erro = '';

  constructor(private http: HttpClient) {}

  buscarCep() {
    this.erro = '';
    this.resultado = null;

    const cepFormatado = this.cep.replace(/\D/g, '');

    if (cepFormatado.length !== 8) {
      this.erro = 'CEP inválido. Deve conter 8 dígitos.';
      return;
    }

    this.http.get(`https://viacep.com.br/ws/${cepFormatado}/json/`)
      .subscribe({
        next: (data) => {
          this.resultado = data;
        },
        error: () => {
          this.erro = 'Erro ao buscar CEP. Verifique e tente novamente.';
        }
      });
  }
}
