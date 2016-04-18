export function isJsx(obj) {
  return obj
    && obj.hasOwnProperty('type')
    && obj.hasOwnProperty('key')
    && obj.hasOwnProperty('ref')
    && obj.hasOwnProperty('props');
}
