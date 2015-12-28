import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

import {BreadcrumbComponent, IBreadcrumb} from './../common/breadcrumb.component';
import {RECIPE_ROUTES} from './route.config';
import {RecipeService} from './recipe.service';

@Component({
    selector: 'recipes',
    templateUrl: 'app/recipes/recipes.component.html',
    directives: [RouterOutlet, BreadcrumbComponent, ROUTER_DIRECTIVES],
    providers: [RecipeService]
})
@RouteConfig(RECIPE_ROUTES)
export class RecipesComponent implements OnInit {
    breadcrumb: IBreadcrumb[];
    
    constructor() {
        this.breadcrumb = [
            { displayName: 'Recipes', route: 'Recipes' },
            { displayName: 'New Recipes', route: 'Recipes/RecipeNew' }
        ]
    }

    ngOnInit() { }

}