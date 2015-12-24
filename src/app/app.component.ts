import {Component} from 'angular2/core';

import {HeaderComponent} from './layout/header.component';
import {RecipesComponent} from './recipes/recipes.component';

@Component({
    selector: 'pantry-manager',
    templateUrl: './app/app.component.html',
    directives: [HeaderComponent, RecipesComponent]
})
export class AppComponent {
    public title = 'Pantry Manager';
}
