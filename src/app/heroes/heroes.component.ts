import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  selectedHero?: Hero;
  heroes: Hero[] = [];
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
    const value = this.isValid()
    // console.log(value)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: selected hero id=${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }



  isValid() {
    // return true;

  }

}
