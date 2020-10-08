import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  toState = "state1";

  changeState(state : any){
    this.toState = state;
  }

  /*prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }*/

}
