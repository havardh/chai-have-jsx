/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';

import { create } from '../src/tree';
import { format } from '../src/format';

describe('.format', () => {
  it('should print empty tags', () => {
    const html = format(create(<div />));

    expect(html).to.equal('<div />');
  });

  it('should print tags with children', () => {
    const html = format(create(<div><div /></div>));

    expect(html).to.equal('<div><div /></div>');
  });
});
