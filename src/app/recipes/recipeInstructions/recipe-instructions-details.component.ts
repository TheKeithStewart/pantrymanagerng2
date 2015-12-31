import {Component, OnInit} from 'angular2/core';

import {IRecipeInstructions} from './recipeInstructions';

@Component({
    selector: 'recipe-instructions-details',
    templateUrl: 'app/recipes/recipeInstructions/recipe-instructions-details.component.html',
    inputs: ['instruction']
})

export class RecipeInstructionsDetailsComponent implements OnInit {
    instruction: IRecipeInstructions;
    
    constructor() { }

    ngOnInit() { }
}
