import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import Footer from 'Components/Footer';

describe('Footer', () => {
    it('should exist', () => {
        expect(Footer).toExist();
    });

    describe('render', () => {
        it('should render footer to output', () => {
            let footer = TestUtils.renderIntoDocument(<Footer />);
            let $el = $(ReactDOM.findDOMNode(footer));
            let actualText = $el.find('.footer-title').text();

            expect(actualText).toBe('Dividr');
        });
    })

});