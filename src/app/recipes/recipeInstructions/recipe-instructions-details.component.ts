import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'recipe-instructions-details',
    templateUrl: 'app/recipes/recipeInstructions/recipe-instructions-details.component.html',
    directives: [FORM_DIRECTIVES]
})

export class RecipeInstructionsDetailsComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
