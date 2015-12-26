import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {IRecipe} from './recipe';
import {RecipeService} from './recipe.service';

@Component({
    templateUrl: 'app/recipes/recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
    public recipe: IRecipe;
    
    constructor(private _recipeService: RecipeService, private _routeParams: RouteParams) { }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._recipeService.getRecipe(id).then(recipe => this.recipe = recipe);
    }
}