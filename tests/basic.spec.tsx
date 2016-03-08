/* eslint no-unused-vars:0, no-undef:0, no-unused-expressions:0 */

import * as React from 'react';
import * as chai from 'chai';
import * as mocha from 'mocha';
import * as ReactTestUtils from 'react-addons-test-utils';

import { Timer } from '../src/components/timer';

const { expect } = chai;

export function run() {
  describe('<Timer />', () => {
    it('changes count after seconds', (done) => {
      let timer = ReactTestUtils.renderIntoDocument(<Timer tickInterval={100} />);
      let span = ReactTestUtils.findRenderedDOMComponentWithTag(timer, 'span');

      expect(span.textContent).to.be.equal('0');
      setTimeout(() => {
        expect(span.textContent).to.be.equal('2');
        done();
      }, 250);
    });
  });
}
