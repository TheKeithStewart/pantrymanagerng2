import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Router, RouteConfig, RouteParams} from 'angular2/router';

import {IRecipe} from './recipe';
import {IRecipeInstructions} from './recipeInstructions/recipeInstructions';
import {IRecipeIngredient} from './recipeIngredient/recipe-ingredient';

import {RecipeService} from './recipe.service';
import {RecipeInstructionsFormComponent} from './recipeInstructions/recipe-instructions-form.component';
import {RecipeIngredientFormComponent} from './recipeIngredient/recipe-ingredient-form.component';

@Component({
    selector: 'recipe-form',
    templateUrl: 'app/recipes/recipe-form.component.html',
    directives: [NgForm, RecipeInstructionsFormComponent, RecipeIngredientFormComponent]
})
export class RecipeFormComponent implements OnInit {
    recipe: IRecipe;

    constructor(private _recipeService: RecipeService, private _router: Router, private _routeParams: RouteParams) {
        let id = +this._routeParams.get('id');
        if (id) {
            this._recipeService.getRecipe(id).then((recipe) => this.recipe = recipe);
        } else {
            this.recipe = this._recipeService.getNewEmptyRecipe();
        }
    }

    ngOnInit() { }

    onSubmit() {
        if (!this.recipe.id) {
            this._recipeService.addRecipe(this.recipe);
        }
        this._router.parent.navigate(['Recipes']);
    }

    addInstruction() {
        let instruction: IRecipeInstructions = {};
        if (!this.recipe.instructions) this.recipe.instructions = [];
        this.recipe.instructions.push(instruction);
    }

    addIngredient() {
        let ingredient: IRecipeIngredient = {};
        if (!this.recipe.ingredients) this.recipe.ingredients = [];
        this.recipe.ingredients.push(ingredient);
    }
}