'use strict';

const swap = require('../Dec20').swap;
const reverse = require('../Dec20').reverse;
const expect = require('chai').expect;

describe('swap array elements', function(){
  var swapArr = [1,2,3,4,5,6];

  // console.log('result- ', result);

  it('switches the specified array elements', function(){
    expect(swap(swapArr, 2, 3)).to.eql([1,2,4,3,5,6]);
  });
});

describe('reverses array elements', function(){
  var revArr = [1,2,4,3,5,6];
  // var expected = [6,5,3,4,2,1];

  it('reverses the input array using the swap function', function(){
    expect(reverse(revArr)).to.eql([6,5,3,4,2,1]);
  });
});
