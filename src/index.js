import { create } from './asserter';
import { equal, match, contain } from './matchers';

export default function haveJsx(Chai) {
  const Assertion = Chai.Assertion;

  overwriteMethod('equal', equal);
  overwriteMethod('match', match);
  overwriteChainableMethod('contain', contain);

  function overwriteMethod(name, method) {
    const asserter = create(name, method);
    Assertion.overwriteMethod(name, asserter);
  }

  function overwriteChainableMethod(name, method) {
    const asserter = create(name, method);
    Assertion.overwriteChainableMethod(name, asserter,
      function chainingBehavior(_super) {
        return () => _super.call(this);
      }
    );
  }
}
