import {IRecipeInstructions} from './recipeInstructions/recipeInstructions';

export interface IRecipe {
    id?: number;
    title: string;
    notes?: string;
    sourceUrl?: string;
    instructions?: IRecipeInstructions[];
    prepTime?: any;
    cookTime?: any;
    totalTime?: string
}