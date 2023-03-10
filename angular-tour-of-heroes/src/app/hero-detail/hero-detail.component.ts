import { Component, Input } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  // on récupere le Hero du parent (HeroesComponent.ts) qui est associé au selectedHero
  // hero? signifie que je parle du hero dans le html et on ajoute un ? sinon erreur
  // Hero est la valeur Hero qui est associé au selectedHero et qui a les propriétés définies dans son interface
  @Input() hero?: Hero;
}
