import {RecipeListComponent} from './recipeList.component';
import {RecipeDetailComponent} from './recipe-detail.component';

var Routes = {
    recipeList: {
        path: '/',
        as: 'RecipeList',
        component: RecipeListComponent,
        useAsDefault: true
    },
    recipeDetail: {
        path: '/:id',
        as: 'RecipeDetail',
        component: RecipeDetailComponent
    }
}

export const RECIPE_ROUTES = Object.keys(Routes).map(r => Routes[r]);