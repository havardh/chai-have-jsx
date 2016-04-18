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
  it('returns true for simple equal nodes', () => {
    expect(<div />).to.match(<div />);
  });

  it('returns true for simple equal trees', () => {
    expect(<div><div /></div>).to.match(<div><div /></div>);
  });

  it('returns true when matching container', () => {
    expect(<div><span /></div>).to.match(<div />);
  });

  it('returns false when not matching container', () => {
    expect(<div><span /></div>).to.not.match(<span />);
  });

  it('returns true when tree is contained', () => {
    expect(
      <div><div /><div /></div>
    ).to.match(
      <div><div /></div>
    );
  });

  it('returns false when tree is not contained', () => {
    expect(
      <div><div /><div /></div>
    ).to.not.match(
      <div><div><div /></div></div>
    );
  });

  it('returns false when order does not match', () => {
    expect(
      <div><div /><div><div /></div></div>
    ).to.not.match(
      <div><div><div /></div><div /></div>
    );
  });
});
