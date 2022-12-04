import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Movie, Movies } from '../movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movieDetails: any;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void{
    console.warn(this.movieDetails);
  }
}
