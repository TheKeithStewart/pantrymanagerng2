import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {IRecipe} from './recipe';

@Component({
    selector: 'recipe-card',
    templateUrl: 'app/recipes/recipeCard.component.html',
    inputs: ['recipe']
})

export class RecipeCardComponent implements OnInit {
    public recipe: IRecipe;
    
    constructor(private _router: Router) { }

    ngOnInit() { }
    
    goToRecipeDetail() {
        this._router.navigate(['RecipeDetail', { 'id': this.recipe.id }])
    }
}