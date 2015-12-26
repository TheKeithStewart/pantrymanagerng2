import {
it,
iit,
describe,
ddescribe,
expect,
inject,
injectAsync,
TestComponentBuilder,
beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';

import {RecipeService} from './recipe.service';

describe('Recipe Service', () => {

    beforeEachProviders(() => [
        RecipeService
    ]);

    xit('should...', () => {

    });

});