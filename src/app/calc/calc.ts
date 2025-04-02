import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-calculator',
  standalone: true,
  templateUrl: './calc.html', 
  imports: [CommonModule] // ✅ Isso garante que *ngFor seja reconhecido
})
export class SimpleCalculatorComponent {
  display: string = '';
  num1: number | null = null;
  num2: number | null = null;
  operator: string | null = null;

  numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];
  operators = ['+', '-', '*', '/'];

  appendNumber(num: number) {
    this.display = this.display.toString() + num.toString();
  }

  setOperator(op: string) {
    if (this.display && !this.operator) {
      this.num1 = parseFloat(this.display);
      this.operator = op;
      this.display = '';
    }
  }

  calculate() {
    if (this.num1 !== null && this.operator && this.display) {
      this.num2 = parseFloat(this.display);
      switch (this.operator) {
        case '+': this.display = (this.num1 + this.num2).toString(); break;
        case '-': this.display = (this.num1 - this.num2).toString(); break;
        case '*': this.display = (this.num1 * this.num2).toString(); break;
        case '/': this.display = this.num2 !== 0 ? (this.num1 / this.num2).toString() : 'Erro'; break;
      }
      this.num1 = null;
      this.num2 = null;
      this.operator = null;
    }
  }

  clear() {
    this.display = '';
    this.num1 = null;
    this.num2 = null;
    this.operator = null;
  }
}
