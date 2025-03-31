import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordAnalyzerComponent } from './word/word';
import { SimpleCalculatorComponent } from './calc/calc';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordAnalyzerComponent, SimpleCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula-angular';
}