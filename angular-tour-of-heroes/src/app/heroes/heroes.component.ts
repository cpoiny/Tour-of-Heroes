import { Component } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  // on recupere le mock HEROES
  heroes: Hero[] = [];

  selectedHero?: Hero;


  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.addMessage(`HeroesComponents : Hero Selected id= ${hero.id}`)
  }


}
