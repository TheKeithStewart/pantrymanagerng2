import {Injectable} from 'angular2/core';

import {RECIPES} from './mock-recipes';

@Injectable()
export class RecipeService {

    constructor() { }
    
    getRecipes() {
        return Promise.resolve(RECIPES);
    }
    
    getRecipe(id: number) {
        return Promise.resolve(RECIPES).then(recipes => recipes.filter(r => r.id === id)[0]);
    }

}