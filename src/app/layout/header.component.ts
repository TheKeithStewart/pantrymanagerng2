import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {APP_ROUTES} from './../route.config';

@Component({
    selector: 'header',
    templateUrl: './app/layout/header.component.html',
    inputs: ['title', 'routes'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)    
export class HeaderComponent {
    
}