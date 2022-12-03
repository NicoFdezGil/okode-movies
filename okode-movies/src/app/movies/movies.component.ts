import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  movies = Movies;

  constructor(){}
  ngOnInit(): void {
  }
}
