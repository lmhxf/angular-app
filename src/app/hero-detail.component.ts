import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location} from '@angular/common';
import { Hero} from './hero';
import { HeroService} from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: `./hero-detail.component.html`
})

export class HeroDetailComponent implements OnInit {
    hero: Hero

    constructor(
        private location: Location,
        private router: ActivatedRoute,
        private heroService: HeroService
    ) {}

    ngOnInit():void {
        this.router.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }

    goBack() {
        this.location.back();
    }
    save() {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}

