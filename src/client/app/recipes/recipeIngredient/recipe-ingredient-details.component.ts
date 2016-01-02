import {Component, OnInit} from 'angular2/core';

import {IRecipeIngredient} from './recipe-ingredient';

@Component({
    selector: 'recipe-ingredient-details',
    templateUrl: 'app/recipes/recipeIngredient/recipe-ingredient-details.component.html',
    inputs: ['ingredient']
})

export class RecipeIngredientDetailsComponent implements OnInit {
    ingredient: IRecipeIngredient;
    
    constructor() { }

    ngOnInit() { }
}