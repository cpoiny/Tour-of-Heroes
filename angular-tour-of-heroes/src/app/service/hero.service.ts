import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../heroes/hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor() { }


  // Function to get the heroesreturn HEROES with observable
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
