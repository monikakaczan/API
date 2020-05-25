import Game from '../game';

const chai = require('chai');

const { expect } = chai;


describe('Game', () => {
  const testData = [
    {
      name: 'user2',
      word: 'Hello',
    },
    {
      name: 'user3',
      word: 'a man a plan a canal panama',
    },
  ];
  it('Correctly identifies palindrome values', () => {
    expect(Game.isPalindrome(testData[1])).to.equal(true);
    expect(Game.isPalindrome(testData[0])).to.equal(false);
  });

  it('Correctly scores the entries', () => {
    expect(Game.getScore(testData[1])).to.equal(21);
  });
});
