import {IRecipeInstructions} from './recipeInstructions/recipeInstructions';

export interface IRecipe {
    id: number;
    title: string;
    notes?: string;
    sourceURL?: string;
    instructions?: IRecipeInstructions[];
    prepTime?: any;
    cookTime?: any;
    totalTime?: string
}