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
import {RecipesComponent} from './recipes.component';


describe('Recipes Component', () => {

  beforeEachProviders(() => []);

    it('should pass', () => {
        expect(1).toEqual(1);
    });    

    it('should fail', () => {
        expect(1).toEqual(2);
    });

});




// import {
// iit,
// it,
// ddescribe,
// describe,
// expect,
// inject,
// injectAsync,
// TestComponentBuilder,
// beforeEachProviders,
// fakeAsync,
// tick
// } from 'angular2/testing';
// import {Component, provide} from 'angular2/core';

// import {RecipesComponent} from './recipes.component';

// describe('Component: recipeForm', () => {

//     beforeEachProviders(() => []);

//     it('should ...', () => {
//         expect(1).toEqual(1);
//     });
    
//     it('should fail', () => {
//         expect(1).toEqual(1);
//     });

    
// });