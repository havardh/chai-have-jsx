/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';

describe('.have.component(<jsx />)', () => {
  it('should match a single div', () => {
    expect(<div />).to.have.jsx(<div />);
  });
});
