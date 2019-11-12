import { Component } from '@angular/core';
import { pageAnimations } from './services/animations.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ pageAnimations ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}