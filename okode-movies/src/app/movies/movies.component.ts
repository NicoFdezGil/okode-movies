import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, Data } from '@angular/router';
import { Movie, Movies } from '../movies';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  movies = Movies;
  currentMovie?: Movie;
  onSelect(movie: Movie): void{
    this.currentMovie = movie;
  }

}

