import _ from 'lodash';

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
