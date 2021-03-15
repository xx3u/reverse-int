module.exports = function reverse (n) {
  let reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed);
}
