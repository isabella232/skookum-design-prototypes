import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('loadStagger', [
      transition('* <=> *', [
        query(':enter',
        [ 
          style({ opacity: 0, transform: 'translaterY(-15px)' }),
          stagger('100ms', 
          animate('550ms ease-out',
          style({ opacity: 1, transform: 'translaterY(0px' })))
        ], { optional: true }),
          query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  contents$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getContent().subscribe(
      data => this.contents$ = data 
    );
  }

}