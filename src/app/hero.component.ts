import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: `./hero.component.html`
})

export class HeroComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) {}

    getHeroes (): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }
    onDelete(hero: Hero): void {
        this.heroService.delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) this.selectedHero = null;
            });
    }

    addHero(name: string): void {
        name = name.trim();
        if(!name) {return;}
        this.heroService.create(name)
            .then(hero => {
                console.log(hero);
                this.heroes.push(hero);
                this.selectedHero = null;
            })
    }

    onSelected (hero: Hero): void {
        this.selectedHero = hero;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}