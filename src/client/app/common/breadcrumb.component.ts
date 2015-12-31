import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

export interface IBreadcrumb {
    displayName: string;
    route: string;
}

@Component({
    selector: 'breadcrumb',
    templateUrl: 'app/common/breadcrumb.component.html',
    inputs: ['breadcrumb'],
    directives: [ROUTER_DIRECTIVES]
})
export class BreadcrumbComponent implements OnInit {
    
    constructor() { }

    ngOnInit() { }
}