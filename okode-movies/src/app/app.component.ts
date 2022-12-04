import { Component } from '@angular/core';
import { Movie, Movies } from './movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'okode-movies';
  movies = Movies;
}
