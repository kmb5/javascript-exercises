const ftoc = function(f) {

  return round((f - 32) * (5/9), 1);
}

const ctof = function(c) {

  return round(c * (9/5) + 32, 1);
}

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}


module.exports = {
  ftoc,
  ctof
}
