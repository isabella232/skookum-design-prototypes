import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {loadStagger} from '../services/animations.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    loadStagger
  ]
})

export class HomeComponent implements OnInit {

  results: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    // For fetching flat JSON array
    // this.data.getContent().subscribe(
    //   data => this.results = data 
    // );

    //Fetch nested JSON objects
    this.data.getContent()
      .subscribe(home =>{
        this.results = home['home']
        console.log((Object.values(this.results)));
    });
  }
}