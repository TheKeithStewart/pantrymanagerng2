import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Component({
    selector: 'header',
    templateUrl: './app/layout/header.component.html',
    inputs: ['title', 'routes'],
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
    public currentRoute: string;

    constructor(router: Router) {
        router.subscribe((url) => this.currentRoute = url);
    }

    isRouteActive(route: string) {
        return (this.currentRoute === route);
    }

}