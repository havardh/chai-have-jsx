import { create as createTree } from './tree';
import { format } from './format';
import { isJsx } from './util/is-jsx';

export function create(name, method) {
  return function assertJsx(_super) {
    return function evaluateComponent(tag, ...args) {
      const obj = this._obj;

      if (isJsx(obj) && isJsx(tag)) {
        const thisObj = createTree(obj);
        const thatObj = createTree(tag);

        return this.assert(method(thisObj, thatObj),
          `Expected: ${format(thisObj)} to ${name}: ${format(thatObj)}`,
          `Expected: ${format(thisObj)} to not ${name}: ${format(thatObj)}`);
      } else {
        return _super.call(this, tag, ...args);
      }
    };
  };
}
