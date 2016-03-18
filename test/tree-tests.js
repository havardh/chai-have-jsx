/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';

import { create, format } from '../src/tree';

describe('tree', () => {
  describe('.create', () => {
    it('should create a div from <div />', () => {
      const div = create(<div />);

      expect(div.name).to.equal('div');
    });

    it('should add children to div', () => {
      const top = create(<div><div /></div>);

      expect(top.children.length).to.equal(1);
    });

    it('should add css classes to div', () => {
      const div = create(<div className="test" />);

      expect(div.classes).to.deep.equal(['test']);
    });
  });

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
});
