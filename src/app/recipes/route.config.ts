import {RecipeListComponent} from './recipeList.component';
import {RecipeDetailComponent} from './recipe-detail.component';
import {RecipeFormComponent} from './recipe-form.component';

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
    },
    recipeNew: {
        path: '/new',
        as: 'RecipeNew',
        component: RecipeFormComponent
    }
}

export const RECIPE_ROUTES = Object.keys(Routes).map(r => Routes[r]);