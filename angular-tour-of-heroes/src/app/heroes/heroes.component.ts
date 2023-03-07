import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // ajout d'une propriété héro
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  // on recupere le mock HEROES
  heroes = HEROES;

  //fonction pour selectionner les details d'un hero selectionné
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
