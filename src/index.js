import { create } from './tree';
import { format } from './format';
import { equal, match } from './matchers';

export default function haveJsx(Chai) {
  const Assertion = Chai.Assertion;

  function isJsx(obj) {
    return obj
      && obj.hasOwnProperty('type')
      && obj.hasOwnProperty('key')
      && obj.hasOwnProperty('ref')
      && obj.hasOwnProperty('props');
  }

  function assertJsxEqual(_super) {
    return function evaluateComponent(tag, ...args) {
      const obj = this._obj;

      if (isJsx(obj) && isJsx(tag)) {
        const thisObj = create(obj);
        const thatObj = create(tag);

        return this.assert(equal(thisObj, thatObj),
          `Expected: ${format(thisObj)} to equal: ${format(thatObj)}`,
          `Expected: ${format(thisObj)} to not equal: ${format(thatObj)}`);
      } else {
        return _super.call(this, tag, ...args);
      }
    };
  }

  Assertion.overwriteMethod('equal', assertJsxEqual);

  function assertJsxMatch(_super) {
    return function evaluateComponent(tag, ...args) {
      const obj = this._obj;

      if (isJsx(obj) && isJsx(tag)) {
        const thisObj = create(obj);
        const thatObj = create(tag);

        return this.assert(match(thisObj, thatObj),
          `Expected: ${format(thisObj)} to match: ${format(thatObj)}`,
          `Expected: ${format(thisObj)} to not match: ${format(thatObj)}`);
      } else {
        return _super.call(this, tag, ...args);
      }
    };
  }

  Assertion.overwriteMethod('match', assertJsxMatch);
}
