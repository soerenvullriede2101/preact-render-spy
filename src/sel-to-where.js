const {ATTRIBUTE_PRESENT} = require('./is-where');

const selToWhere = sel => {
  if (typeof sel === 'object') {
    return sel;
  }
  if (/^\./.test(sel)) {
    return {props: {class: sel.substring(1)}};
  }
  else if (/^#/.test(sel)) {
    return {props: {id: sel.substring(1)}};
  }
  else if (/^\[/.test(sel)) {
    return {props: {[sel.substring(1, sel.length - 1)]: ATTRIBUTE_PRESENT}};
  }

  return {type: sel};
};

module.exports = {
  selToWhere,
};
