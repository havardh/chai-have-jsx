/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';

describe('expect(<jsx />).equal(<jsx />)', () => {
  it('returns true for <div />', () => {
    expect(<div />).to.equal(<div />);
  });

  it('returns false for <span />', () => {
    expect(<span />).to.not.equal(<div />);
  });
});

describe('.have.jsx.containing(<div />)', () => {

});
