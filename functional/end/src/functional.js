function test1 (clients) {
  return _.countBy(clients, balanceState);
}

function balanceState (client) {
  return client.balance > 0 ? "positive" : "negative";
}

function test2 (clients) {
  return _.reduce(clients, function (memo, client) {
    return memo + client.balance;
  }, 0)
}

function test3 (clients) {
  var groups = _.groupBy(clients, balanceState);
  var totals = _.chain(groups)
    .values()
    .map(sumBalance)
    .value();
  var result = _.object(_.keys(groups), totals);
  return result;
}

function sumBalance (clients) {
  return _.reduce(clients, function (memo, client) {
    return memo + client.balance;
  }, 0);
}

function test4 (clients) {
  return _.chain(clients)
    .sortBy(function (client) {
      return client.balance;
    })
    .take(2)
    .pluck("firstName")
    .map(function (name) {
      return name.toUpperCase();
    })
    .value();
}