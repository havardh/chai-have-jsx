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

  it('returns true when classes match', () => {
    expect(<div className="match" />).to.equal(<div className="match" />);
  });

  it('returns false when classes mismatch', () => {
    expect(<div className="mis" />).to.not.equal(<div className="match" />);
  });
});
