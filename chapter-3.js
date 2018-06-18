// used for applying a function to only one arguments
const unary = fn => arg => fn(arg);

const parsedInt = ['1', '2', '3'].map(unary(parseInt));

parsedInt;

// use for passing values and holding them
const identity = v => v;

const words = '   Now is the time for all...  '.split(/\s|\b/).filter(identity);

words;

// executes functions from right to left
const compose = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)), identity);

const a = x => x;
const c = f => x => f(x * 2);
const b = f => x => f(x + 2);

// compose of high order functions is nto the same as composing normal functions

// HOF
const fn1 = compose(
  c,
  b,
)(a);

const tmp = fn1(1);

tmp;

// Non HOF
const fn2 = compose(
  x => x * 2,
  x => x + 2
);

const tmp2 = fn2(1);

tmp2

