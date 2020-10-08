import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('changeState',[
     /* state('state1',style({
        backgroundColor: 'green',
        transform: 'scale(0.5)'
      })),
      state('state2',style({
        //backgroundColor: 'pink',
        transform: 'scale(1.5)'
      })),*/
      transition('*=>state1',animate('1000ms',style({transform: 'scale(0.5)'}))),
      transition('*=>state2',animate('2000ms',style({transform: 'scale(1.5)'})))
    ]),
    
  ]
})
export class AnimationComponent implements OnInit {

  @Input() currentState;
  constructor() { }

  ngOnInit(): void {
  }

}
