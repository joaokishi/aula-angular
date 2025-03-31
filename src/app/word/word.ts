import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-word-analyzer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './word.html'
})
export class WordAnalyzerComponent {
  word: string = '';
  charCount: number = 0;
  isPalindrome: boolean | null = null;

  analyzeWord() {
    this.charCount = this.word.length;
    this.isPalindrome = this.word.toLowerCase() === this.word.toLowerCase().split('').reverse().join('');
  }
}
