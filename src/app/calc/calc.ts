import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calc.html'
})
export class SimpleCalculatorComponent {
  num1!: number;
  num2!: number;
  operator: string = '+';
  result: number | string = '';

  calculate() {
    switch (this.operator) {
      case '+': this.result = this.num1 + this.num2; break;
      case '-': this.result = this.num1 - this.num2; break;
      case '*': this.result = this.num1 * this.num2; break;
      case '/': this.result = this.num2 !== 0 ? this.num1 / this.num2 : 'Erro: Divisão por zero'; break;
      default: this.result = 'Operador inválido';
    }
  }
}
