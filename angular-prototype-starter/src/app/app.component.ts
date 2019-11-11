import { Component } from '@angular/core';
import { fadeAnimation } from './services/animations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ fadeAnimation ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Skookum Angular Prototype';
}
