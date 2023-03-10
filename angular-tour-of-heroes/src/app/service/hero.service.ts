import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../heroes/hero';
import { HEROES } from '../mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(
    private messageService : MessageService
  ) { }


  // Function to get the heroesreturn HEROES with observable
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.addMessage('Hero Service : Fetched Heroes');
    return heroes;
  }
}
