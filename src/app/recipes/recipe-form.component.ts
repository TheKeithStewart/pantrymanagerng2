import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Router, RouteConfig} from 'angular2/router';

import {IRecipe} from './recipe';
import {IRecipeInstructions} from './recipeInstructions/recipeInstructions';

import {RecipeService} from './recipe.service';
import {RecipeInstructionsFormComponent} from './recipeInstructions/recipe-instructions-form.component';

@Component({
    selector: 'recipe-form',
    templateUrl: 'app/recipes/recipe-form.component.html',
    directives: [NgForm, RecipeInstructionsFormComponent]
})
export class RecipeFormComponent implements OnInit {
    recipe: IRecipe;

    constructor(private _recipeService: RecipeService, private _router: Router) {
        this.recipe = this._recipeService.getNewEmptyRecipe();
    }

    ngOnInit() { }

    onSubmit() {
        console.log(this.recipe);
        this._recipeService.addRecipe(this.recipe);
        this._router.parent.navigate(['Recipes']);
    }
    
    addInstruction() {
        let instruction: IRecipeInstructions = {};
		this.recipe.instructions.push(instruction);
    }
}