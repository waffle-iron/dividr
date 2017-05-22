import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import Homepage from 'Components/HomePage';

describe('Homepage', () => {
    it('should exist', () => {
        expect(Homepage).toExist();
    });

    describe('render', () => {
        it('should render to the page', () => {
            let homepage = TestUtils.renderIntoDocument(<Homepage />);
            let $el = $(ReactDOM.findDOMNode(homepage));
            let actualText = $el.find('.tagline').text();

            expect(actualText).toBe('Divide Portions Easier')
        });
    })
});