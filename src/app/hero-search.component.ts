import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {HeroSearchService} from './hero-search.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component ({
    selector: 'hero-search',
    templateUrl: `./hero-search.component.html`,
    providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>
    private searchTerms = new Subject<string>();

    constructor(
        private router: Router,
        private heroSearchService: HeroSearchService
    ) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
            .catch(error=>{
                console.log(error);
                return Observable.of<Hero[]>([])
            })
    }

    gotoDetail(hero: Hero): void {
        this.router.navigate(['./detail', hero.id]);
    }
}
