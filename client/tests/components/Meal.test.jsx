import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import Meal from 'Components/Meal';

describe('Meal', () => {
    it('should exist', () => {
        expect(Meal).toExist();
    });

    describe('render', () => {
        it('should render to the page with the correct title', () => {
            let mealProp = {
                mealName: 'Beef casserole',
                cookedWeight: 1000,
                portionSize: 200,
                servings: 5
            };
            let meal = TestUtils.renderIntoDocument(<Meal meal={mealProp} />);
            let $el = $(ReactDOM.findDOMNode(meal));
            let actualText = $el.find('.meal-title').text();

            expect(actualText).toBe(mealProp.mealName);
        })
    })
});