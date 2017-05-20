import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import Header from 'Components/Header';

describe('Header', () => {
    it('should exist', () => {
        expect(Header).toExist();
    });

    describe('render', () => {
        it('should render header to output', () => {
            let header = TestUtils.renderIntoDocument(<Header />);
            let $el = $(ReactDOM.findDOMNode(header));
            let actualText = $el.find('.app-title').text();

            expect(actualText).toBe('Dividr');
        });
    })
});