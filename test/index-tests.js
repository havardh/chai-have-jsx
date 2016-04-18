/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';

describe('expect(<jsx />).to.equal(<jsx />)', () => {
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

describe('expect(<jsx />).to.match(<jsx />)', () => {
  it('returns true for <div />', () => {
    expect(<div />).to.match(<div />);
  });

  it('returns true for nested div', () => {
    expect(<div><div /></div>).to.match(<div><div /></div>);
  });

  it('returns true when path is found', () => {
    expect(
      <div><div /><div /></div>
    ).to.match(
      <div><div /></div>
    );
  });

  it('returns false when path is not found', () => {
    expect(
      <div><div /><div /></div>
    ).to.not.match(
      <div><div><div /></div></div>
    );
  });
});
