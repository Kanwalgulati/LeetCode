//@https://leetcode.com/problems/number-of-employees-who-met-the-target

var numberOfEmployeesWhoMetTarget = function (hours, target) {
  return hours.filter((hr) => hr >= target).length;
};