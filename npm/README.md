# DICTANY
Create you fast and simple dictionary or a big and complex with a easy way.

## All process creating have a avg of 1 mileseconds and call have a avg of 3 mileseconds!!!
```javascript
npm install dictany
```

## I will help if you have any difficulty =)
Contact me by [github:heyderpd](https://github.com/heyderpd). I'll be glad to help you.

## Thanks for [npm~lucasmreis](https://www.npmjs.com/~lucasmreis)

## !!The key list accept any values of [anymath](https://www.npmjs.com/package/anymatch) module!!

## Simple dictionary!
Can create a simple dictionary

Example:
```javascript
DICT = required('dictany')

DictResponse = DICT({
  '20*': 'Sucess',
  '307': 'Use Proxy',
  '404': 'Not Found',
  '5*': 'Server Error',
  'DEFAULT': 'Unknown Error...' 
})

DictResponse('201') // 'Sucess'
DictResponse('503') // 'Server Error'
DictResponse('100') // 'Unknown Error...' 
```

## Use any value of response you want!
The value of return the dictionary is our imagination! The default value is return if fail to find a need.

Example:
```javascript
DictTest = DICT({
  '*array': [ 0, 1, 2 ],
  '*object*': { 'a': 1, 'b': 2 },
  'DEFAULT': function(){ console.log('say my name!'); }
})

DictTest('give me a array') // [ 0, 1, 2 ]
DictTest('Breaking Bad')() // log: say my name!
```

## Two level of dictionary!
Can use two level of dictionary, will math any level of rules to find the response.
```javascript
DictQuestion = DICT({
  '*car*': DICT({
    '*new*': 'new beetle!',
    '*old*': 'volkswagen beetle!',
    '*fast*': 'ferrari!',
    'DEFAULT': 'Unknown car...' 
  }),
  '*food*': DICT({
    '*hot*': 'chili!',
    '*cold*': 'ice cream!',
    '*fast*': 'hamburger!',
    'DEFAULT': 'Unknown food...'
  }),
  'DEFAULT': 'Unknown question...' 
})

DictQuestion('give me a old car') // 'volkswagen beetle!'
DictQuestion('i need a cold food') // 'ice cream!'
```

## indefinite nesting limit of dictionaries!
```javascript
DictTalk = DICT({
  '*car*': DICT({
    '*new*': 'new beetle!',
    '*old*': DICT({      
      '*not*': DICT({
        '*red*': 'yellow car?',
        '*good*': DICT({
          '*stop*': 'please! stop',
          'DEFAULT': 'I am confused ...' 
        }),
        'DEFAULT': 'What!?' 
      }),
      'DEFAULT': 'Unknown car...' 
    }),
    'DEFAULT': 'Unknown question...' 
  })
})

DictTalk('not give me a old red car') // 'yellow car?'
DictTalk('good car old not me') // 'I am confused ...' 
```
