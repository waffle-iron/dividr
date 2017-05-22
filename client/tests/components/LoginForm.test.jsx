import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import LoginPage from 'Components/LoginPage';

describe('LoginForm', () => {
    it('should exist', () => {
        expect(LoginPage).toExist();
    });

    describe('render', () => {
        it('should render to the page', () => {
            let loginPage = TestUtils.renderIntoDocument(<LoginPage/>, context);
            let $el = $(ReactDOM.findDOMNode(loginPage));
            let actualText = $el.find('.form-title').text();

            expect(actualText).toBe('Login')
        });
    });
});