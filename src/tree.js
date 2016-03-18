import _ from 'lodash';

export function create(jsx) {
  const children = childrenAsArray(jsx.props.children);

  return {
    name: jsx.type,
    children: _.map(children, create),
    classes: classesAsArray(jsx.props.className),
  };
}

export function format(tree) {
  if (tree.children.length) {
    return `<${tree.name}${formatClasses(tree.classes)}>` +
       `${_.map(tree.children, format)}` +
     `</${tree.name}>`;
  } else {
    return `<${tree.name}${formatClasses(tree.classes)} />`;
  }
}

function formatClasses(classes) {
  if (classes.length) {
    return ` class='${classes.join(' ')}'`;
  } else {
    return '';
  }
}

function classesAsArray(classes) {
  if (classes) {
    return classes.split(' ');
  } else {
    return [];
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
