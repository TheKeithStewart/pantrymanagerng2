import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Routes, APP_ROUTES} from './route.config';

import {HeaderComponent} from './layout/header.component';

@Component({
    selector: 'pantry-manager',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES, HeaderComponent]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    public title = 'Pantry Manager';
    public routes = Routes;
}
