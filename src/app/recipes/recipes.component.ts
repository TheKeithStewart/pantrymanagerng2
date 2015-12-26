import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {RECIPE_ROUTES} from './route.config';

@Component({
    selector: 'recipes',
    templateUrl: 'app/recipes/recipes.component.html',
    directives: [RouterOutlet]
})
@RouteConfig(RECIPE_ROUTES)
export class RecipesComponent implements OnInit {

    constructor() {

    }

    ngOnInit() { }

}