import _ from 'lodash';

export default function haveJsx(Chai) {
  Chai.Assertion.addMethod('jsx', function evaluateComponent(tag) {
    return this.assert(_.isEqual(this._obj, tag));
  });
}
