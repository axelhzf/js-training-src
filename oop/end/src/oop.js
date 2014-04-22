function Person (name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.fullName = function () {
  return this.name + " " + this.surname;
};

function PostList(items) {
  this.items = items;
}

var paginationMixin = {
  page : function (pageNumber) {
    var pageSize = this.pageSize || 2;
    var start = pageNumber * pageSize;
    var end = start + pageSize;
    return this.items.slice(start, end);
  }
};

var sortMixin = {
  sortBy : function (propertyName) {
    this.items = this.items.sort(function (a, b) {
      return a[propertyName] > b[propertyName];
    });
  }
};

function extend(dest, source) {
  for (var prop in source) {
    dest[prop] = source[prop];
  }
}