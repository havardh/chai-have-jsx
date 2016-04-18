import _ from 'lodash';

export function equal(thisTree, thatTree) {
  return _.isEqual(thisTree, thatTree);
}

export function match(thisTree, thatTree) {
  if (equal(thisTree, thatTree)) {
    return true;
  }

  if (matchNode(thisTree, thatTree)) {
    const thatChild = thatTree.children[0];
    return _.some(thisTree.children, matches(thatChild));

    const matchList = _.map(that.children, (child, i) => ({
      index: i,
      list: matchesIn(that.children),
    }));

    return hasD
  }
  return false;
}

function matches(thatNode) {
  return thisNode => match(thisNode, thatNode);
}

const compare(a, b) => b.length - a.length;

function hasDistinctAllocation(matchList) {
  matchList.sort(compare);
}

/*
0: 0, 1
1: 1, 3, 4, 5
2:
3:
*/

function matchesIn(nodes) {
  return node =>_.map(nodes, matches(node));
}

function matchNode(thisNode, thatNode) {
  return thisNode.name === thatNode.name &&
    _.isEqual(thisNode.classes, thatNode.classes);
}
