import {IRecipeInstructions} from './recipeInstructions/recipeInstructions';
import {IRecipeIngredient} from './recipeIngredient/recipe-ingredient';

export interface IRecipe {
    id?: number;
    title: string;
    notes?: string;
    sourceUrl?: string;
    ingredients?: IRecipeIngredient[];
    instructions?: IRecipeInstructions[];
    prepTime?: any;
    cookTime?: any;
    totalTime?: string
}