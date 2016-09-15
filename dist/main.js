
/*!
 * dictany
 * Copyright (c) 2016 heyderpd <heyderpd@gmail.com>
 * ISC Licensed
 */

const initializeUberDictionary = function (Dictionary) {
  let RulesList = [],
      ValuesList = [];
  let Default = Dictionary['DEFAULT'] ? Dictionary['DEFAULT'] : '';
  delete Dictionary['DEFAULT'];
  doEach(Dictionary, (Rule, Value) => {
    RulesList.push(Rule);
    ValuesList.push(Value);
  });
  return {
    Rules: RulesList,
    Values: ValuesList,
    Default: Default
  };
};

const createUberDictionary = function (uberDictionary) {
  const _DICT_ = '___DICTIONARY___';
  const { Rules, Values, Default } = initializeUberDictionary(uberDictionary);
  const dictionary = function (Need) {
    const index = anymatch(Rules, Need, true);
    if (index >= 0) {
      const value = Values[index];
      return value.isDict === _DICT_ ? value(Need) : value;
    } else {
      return Default;
    }
  };
  dictionary.isDict = _DICT_;
  return dictionary;
};

const doEach = (obj, func) => Object.keys(obj).forEach(key => func(key, obj[key]));

const anymatch = require('anymatch');

module.exports = createUberDictionary;