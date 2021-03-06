import { Component, OnInit} from '@angular/core';
import { Hero} from './hero';
import { HeroService} from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: `./dashboard.component.html`,
})

export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(private heroService: HeroService) {}

    getHeroes() : void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0,5));
    }

    ngOnInit(): void {
        this.getHeroes();
    }
}

