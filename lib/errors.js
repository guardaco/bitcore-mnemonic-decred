'use strict';

var spec = {
  name: 'Mnemonic',
  message: 'Internal Error on bitcore-mnemonic module',
  errors: [{
    name: 'InvalidEntropy',
    message: 'Entropy length must be an even multiple of 11 bits'
  }, {
    name: 'UnknownWordlist',
    message: 'Could not detect the used word list'
  }, {
    name: 'InvalidMnemonic',
    message: 'Mnemonic string is invalid'
  }]
};

module.exports = require('bitcore-lib-decred').errors.extend(spec);
