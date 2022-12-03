import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie, Movies } from '../movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const routerParams = this.route.snapshot.paramMap;
    const movieIdRoute = Number(routerParams.get('movieId'));

    this.movie = Movies.find(movie => movie.id === movieIdRoute);
  }
}
