const { map } = require('./arrays');

/**
 * You may already be familiar with JS' built-in methods on the Array object.
 *
 * The `map`, `filter`, and `reduce` methods on `Array.prototype`are often
 * considered conceptual ornerstones of functional programming in Javascript,
 * but `some`, `every`, `forEach`, `indexOf`, `find`,`flat`, and `flatMap` are
 * also important.
 *
 * In this first section, you'll re-implement each of these methods yourself to
 * help you develop a clear understanding ofwhat they do and how they are
 * distinct.
 *
 * In asking you to do this, we'll assume you're familiar with for loops,
 * conditionals, and basic syntax for declaring and mutating arrays. You'll
 * likely want to use for loops, but you might also make use of `Array.forEach`
 * or functions which you have written previously.
 *
 * The only constraint the tests impose is that you do not use the
 * `Array.prototype` method which we ask you to re-implment-- as that would be
 * too easy, and you wouldn't learn anything!
 */

/**
 * The `map` function takes in an array, applies a function to each of its
 * elements, and returns the results in a new array.
 *
 * `Array.prototype.map` takes a single argument--that is, it has an arity of
 * one--because the array it takes as input is available via its `this` context.
 *
 * But our re-implementation of `map` will require two arguments, as we won't
 * rely on `this`. The same goes for all of the rest of the array methods which
 * we ask you to implement in this exercise.
 *
 */
describe('The map function', () => {
  it('should return an array', () => {
    expect(Array.isArray(map([], () => {}))).toBe(true);
  });

  it('should apply the second argument, a function, to each element in the array, the first argument', () => {
    const input = [1, 2, 3, 4, 5];
    const timesTwo = (x) => x * 2;
    expect(map(input, timesTwo)).toStrictEqual([2, 4, 6, 8, 10]);
  });

  it('should not mutate the array which was passed in as an argument', () => {
    const input = ['a', 'b', 'c'];
    const repeatTwice = (l) => l.repeat(2);
    map(input, repeatTwice);
    expect(input).toStrictEqual(['a', 'b', 'c']);
  });

  it('should not call Array.map()', () => {
    const originalMapFunction = Array.prototype.map;
    Array.prototype.map = jest.fn();
    map([], () => {});
    expect(Array.prototype.map).not.toHaveBeenCalled();
    Array.prototype.map = originalMapFunction;
  });
});
