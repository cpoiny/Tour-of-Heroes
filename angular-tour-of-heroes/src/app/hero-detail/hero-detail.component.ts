import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../heroes/hero';
import { HeroService } from '../service/hero.service';

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

constructor (
  private heroService : HeroService,
  private activatedRoute : ActivatedRoute,
  private location: Location
){}

ngOnInit(): void {
  this.getHero();
}


getHero(): void {
  const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  this.heroService.getHero(id).subscribe(hero => this.hero = hero); 
}

goBack(): void {
  this.location.back();
}

}
