import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WordAnalyzerComponent } from './word/word';
import { SimpleCalculatorComponent } from './calc/calc';
import { ConsultaCepComponent } from './cep/cep.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-word-analyzer', component: WordAnalyzerComponent },
  { path: 'app-simple-calculator', component: SimpleCalculatorComponent },
  { path: 'app-consulta-cep', component: ConsultaCepComponent }
];
