import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import SignUpPage from 'Components/SignUpPage';

describe('SignUpForm', () => {
    it('should exist', () => {
        expect(SignUpPage).toExist();
    });

    describe('render', () => {
        it('should render to the page', () => {
            let loginPage = TestUtils.renderIntoDocument(<SignUpPage/>, context);
            let $el = $(ReactDOM.findDOMNode(loginPage));
            let actualText = $el.find('.form-title').text();

            expect(actualText).toBe('Sign up')
        });
    });
});