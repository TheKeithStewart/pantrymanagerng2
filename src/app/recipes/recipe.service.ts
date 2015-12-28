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
        console.log(recipe);
        if (!recipe.id) {
            recipe.id = this.generateID();
            console.log('new id', recipe);
        }
        console.log(recipe);
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
            title: 'New Recipe'
        }
    }
    
    getRecipes() {
        return Promise.resolve(this.recipes);
    }
    
    getRecipe(id: number) {
        return Promise.resolve(this.recipes).then(recipes => recipes.filter(r => r.id === id)[0]);
    }

}