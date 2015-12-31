import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {IRecipeInstructions} from './recipeInstructions';

@Component({
    selector: 'recipe-instructions-form',
    templateUrl: 'app/recipes/recipeInstructions/recipe-instructions-form.component.html',
    directives: [NgForm],
    inputs: ['instruction']
})

export class RecipeInstructionsFormComponent implements OnInit {
    instruction: IRecipeInstructions;
    
    constructor() { }

    ngOnInit() { }
}