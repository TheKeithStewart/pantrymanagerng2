import {RecipesComponent} from './recipes/recipes.component';
import {HomeComponent} from './home/home.component';
import {PantryComponent} from './pantry/pantry.component';

export var Routes = {
	home: {
		path: '/home',
		as: 'Home',
        component: HomeComponent,
        useAsDefault: true
	},	
	recipes: {
		path: '/recipes/...',
		as: 'Recipes',
		component: RecipesComponent
    },
    pantry: {
        path: '/pantry',
        as: 'Pantry',
        component: PantryComponent
    }
}

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);