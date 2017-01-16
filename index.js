/**
 * This object is map of all replacements we need make.
 *
 * @type {Object}
 */
const map = {
  '*': '\\*',
  '#': '\\#',
  '(': '\\(',
  ')': '\\)',
  '[': '\\[',
  ']': '\\]',
  _: '\\_',
  '\\': '\\\\',
  '+': '\\+',
  '-': '\\-',
  '`': '\\`',
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  "|": "&#124;"
};

module.exports = (string) => string.replace(/[\|\*\(\)\[\]\+\-\\_`#<>]/g, m => map[m]);
