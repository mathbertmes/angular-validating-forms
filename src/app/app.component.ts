import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuiltInValidatorComponent } from './components/reactive/built-in-validator/built-in-validator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuiltInValidatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'validating-forms';
}
