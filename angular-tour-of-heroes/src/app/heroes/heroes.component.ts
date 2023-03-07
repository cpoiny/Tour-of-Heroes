import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // ajout d'une propriété héro
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }


}
