import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'recipe-card',
    templateUrl: 'app/recipes/recipeCard.component.html',
    inputs: ['recipe']
})

export class RecipeCardComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}