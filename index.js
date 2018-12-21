//

const HYPER_COMMENT_REGEX = /\d\.\d+%/;

const test = value => {
  return (
    value !== undefined &&
    value !== null &&
    value.nodeType === 8 &&
    value.constructor !== undefined &&
    value.constructor.name === 'Comment' &&
    value.textContent !== undefined &&
    HYPER_COMMENT_REGEX.test(value.textContent)
  );
};

const print = () => '';

module.exports = {
  print: print,
  test: test
};
