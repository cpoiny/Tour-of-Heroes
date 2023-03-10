import { Component } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
 
  // on recupere le mock HEROES
  heroes : Hero [] = [];
  

  //fonction pour selectionner les details d'un hero selectionné
  selectedHero?: Hero;


constructor (
  private heroService: HeroService
) {}

ngOnInit() {
  this.getHeroes();
}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
