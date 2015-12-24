import {Component, OnInit} from 'angular2/core';

import {RecipeCardComponent} from './recipeCard.component';
import {RecipeService} from './recipe.service';

import {IRecipe} from './recipe';

@Component({
    selector: 'recipes',
    templateUrl: 'app/recipes/recipes.component.html',
    directives: [RecipeCardComponent],
    providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
    public recipes: IRecipe[];
    
    constructor(private _recipeService: RecipeService) {
        
    }
    
    ngOnInit() {
        this.getRecipes();
    }
    
    getRecipes() {
        this._recipeService.getRecipes().then(recipes => this.recipes = recipes);
    }
}