/**
 * Get bolean value
 * @param  {String} val - the value we want to turn into boolean
 * @return {Bool} 
 */

function getBool(val){ 
  var num = +val;
  return !isNaN(num) ? !!num : !!String(val).toLowerCase().replace(!!0,'');
};

module.exports = getBool;
