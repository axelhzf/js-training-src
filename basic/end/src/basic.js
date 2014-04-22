function test1 () {
  var total = 0;
  for (var i = 1; i <= 100; i++) {
    total += i;
  }
  return total;
}

function test2 () {
  var total = 0;
  for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}

function test3 (a, b) {
  return (a + " " + b).toUpperCase();
}

function test4 () {
  var result = [];
  for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}

function test5 (input) {
  var uniqueKeys = {};
  var result = [];
  for (var i = 0; i < input.length; i++) {
    var value = input[i];
    if (!uniqueKeys[value]) {
      uniqueKeys[value] = value;
      result.push(value);
    }
  }
  return result;
}

function test6 (obj) {
  var result = {keys: [], values: []};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.keys.push(key);
      result.values.push(obj[key]);
    }
  }
  return result;
}

function test7 (input) {
  return /.+@.+\..+/.test(input);
}