import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {IRecipeIngredient} from './recipe-ingredient';

@Component({
    selector: 'recipe-ingredient-form',
    templateUrl: 'app/recipes/recipeIngredient/recipe-ingredient-form.component.html',
    directives: [NgForm],
    inputs: ['ingredient']
})

export class RecipeIngredientFormComponent implements OnInit {
    ingredient: IRecipeIngredient;
    
    constructor() { }

    ngOnInit() { }
}