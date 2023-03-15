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
    private messageService: MessageService
  ) { }


  // Function to get the heroesreturn HEROES with observable
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.addMessage('Hero Service : Fetched Heroes');
    return heroes;
  }


  //Function to get one hero by his id in order to display his details with the component hero detail
  getHero(id : number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.addMessage(`Hero fetched is id:${id}`);
    return of(hero);
  }

}
