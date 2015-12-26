import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'header',
    templateUrl: './app/layout/header.component.html',
    inputs: ['title', 'routes'],
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {

}