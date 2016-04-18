import _ from 'lodash';

export function equal(thisTree, thatTree) {
  return _.isEqual(thisTree, thatTree);
}

export function match(thisTree, thatTree) {
  if (equal(thisTree, thatTree)) {
    return true;
  }

  if (matchNode(thisTree, thatTree)) {
    const n = thatTree.children.length;
    if (n === 0) {
      return true;
    }

    let i = 0;
    for (const thisChild of thisTree.children) {
      if (match(thisChild, thatTree.children[i])) {
        i += 1;
      }
    }

    return i === n;
  } else {
    return false;
  }
}

function matchNode(thisNode, thatNode) {
  if (!(thisNode && thatNode)) {
    return false;
  }

  return thisNode.name === thatNode.name &&
    _.isEqual(thisNode.classes, thatNode.classes);
}

export function contain(thisTree, thatTree) {
  return equal(thisTree, thatTree);
}
