'use strict';

/*!
 * dictany
 * Copyright (c) 2016 heyderpd <heyderpd@gmail.com>
 * ISC Licensed
 */

var initializeUberDictionary = function initializeUberDictionary(Dictionary) {
  var RulesList = [],
      ValuesList = [];
  var Default = Dictionary['DEFAULT'] ? Dictionary['DEFAULT'] : '';
  delete Dictionary['DEFAULT'];
  doEach(Dictionary, function (Rule, Value) {
    RulesList.push(Rule);
    ValuesList.push(Value);
  });
  return {
    Rules: RulesList,
    Values: ValuesList,
    Default: Default
  };
};

var createUberDictionary = function createUberDictionary(uberDictionary) {
  var _DICT_ = '___DICTIONARY___';

  var _initializeUberDictio = initializeUberDictionary(uberDictionary);

  var Rules = _initializeUberDictio.Rules;
  var Values = _initializeUberDictio.Values;
  var Default = _initializeUberDictio.Default;

  var dictionary = function dictionary(Need) {
    var index = anymatch(Rules, Need, true);
    if (index >= 0) {
      var value = Values[index];
      return value.isDict === _DICT_ ? value(Need) : value;
    } else {
      return Default;
    }
  };
  dictionary.isDict = _DICT_;
  return dictionary;
};

var doEach = function doEach(obj, func) {
  return Object.keys(obj).forEach(function (key) {
    return func(key, obj[key]);
  });
};

var anymatch = require('anymatch');

module.exports = createUberDictionary;