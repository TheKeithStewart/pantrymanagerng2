import {Injectable} from 'angular2/core';

import {IRecipe} from './recipe';
import {RECIPES} from './mock-recipes';

@Injectable()
export class RecipeService {
    public recipes: IRecipe[];
    
    constructor() {
        this.recipes = RECIPES;
    }
    
    addRecipe(recipe: IRecipe) {
        if (!recipe.id) {
            recipe.id = this.generateID();
        }

        this.recipes.push(recipe);
    }
    
    generateID(): number {
        var highestID = Math.max.apply(Math, this.recipes.map((recipe) => {
            return recipe.id;
        }));
        
        var nextID = highestID + 1;
        
        return nextID;
    }
    
    getNewEmptyRecipe(): IRecipe {
        return {
            title: 'New Recipe',
            instructions: []
        }
    }
    
    getRecipes() {
        return Promise.resolve(this.recipes);
    }
    
    getRecipe(id: number) {
        return Promise.resolve(this.recipes).then(recipes => recipes.filter(r => r.id === id)[0]);
    }

}