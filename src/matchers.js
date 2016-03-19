import _ from 'lodash';

export function equal(thisTree, thatTree) {
  return _.isEqual(thisTree, thatTree);
}

export function match(thisTree, thatTree) {
  if (_.isEqual(thisTree, thatTree)) {
    return true;
  }
  return false;
}
