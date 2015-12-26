import {RecipeListComponent} from './recipeList.component';

var Routes = {
    recipeList: {
        path: '/',
        as: 'RecipeList',
        component: RecipeListComponent,
        useAsDefault: true
    }
}

export const RECIPE_ROUTES = Object.keys(Routes).map(r => Routes[r]);