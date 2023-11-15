//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

var kidsWithCandies = function (candies, extraCandies) {
  //check which number is greatest
  let greatestNumner = Number.NEGATIVE_INFINITY;
  candies.map((candy) => {
    if (candy > greatestNumner) {
      greatestNumner = candy;
    }
  });
  return candies.map((candy) => candy + extraCandies >= greatestNumner);
};
