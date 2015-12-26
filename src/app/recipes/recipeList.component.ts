import {Component, OnInit} from 'angular2/core';

import {IRecipe} from './recipe';
import {RecipeCardComponent} from './recipeCard.component';
import {RecipeService} from './recipe.service';

@Component({
    templateUrl: 'app/recipes/recipeList.component.html',
    directives: [RecipeCardComponent]
})
export class RecipeListComponent implements OnInit {
    public recipes: IRecipe[];

    constructor(private _recipeService: RecipeService) { }

    ngOnInit() {
        this.getRecipes();
    }

    getRecipes() {
        this._recipeService.getRecipes().then(recipes => this.recipes = recipes);
    }
}