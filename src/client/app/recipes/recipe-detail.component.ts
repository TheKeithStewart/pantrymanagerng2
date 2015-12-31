import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {IRecipe} from './recipe';
import {RecipeService} from './recipe.service';
import {RecipeInstructionsDetailsComponent} from './recipeInstructions/recipe-instructions-details.component';

@Component({
    selector: 'recipe-detail',
    templateUrl: 'app/recipes/recipe-detail.component.html',
    directives: [RecipeInstructionsDetailsComponent, ROUTER_DIRECTIVES]
})
export class RecipeDetailComponent implements OnInit {
    public recipe: IRecipe;
    
    constructor(private _recipeService: RecipeService, private _routeParams: RouteParams, private _router: Router) { }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._recipeService.getRecipe(id).then(recipe => this.recipe = recipe);
    }
    
    goToEdit() {
        this._router.parent.navigate(['/edit/' + this.recipe.id]);
    }
}