import _ from 'lodash';

export function create(jsx) {
  const children = childrenAsArray(jsx.props.children);
  return {
    name: jsx.type,
    children: _.map(children, create),
  };
}

export function format(tree) {
  if (tree.children.length) {
    return `<${tree.name}>${_.map(tree.children, format)}</${tree.name}>`;
  } else {
    return `<${tree.name} />`;
  }
}

function childrenAsArray(children) {
  if (children) {
    if (_.isArray(children)) {
      return children;
    } else {
      return [children];
    }
  }
  return [];
}
