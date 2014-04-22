describe("OOP", function () {

  it("Person", function () {
    var person = new Person("Troy", "McClure");
    expect(person.fullName()).to.equal("Troy McClure");
  });

  it("Mixins", function () {
    var postItems = [
      {id: 3, name: "Why JS is better than Java?"},
      {id: 2, name: "TDD in JavaScript"},
      {id: 0, name: "How to become a JS guru"},
      {id: 1, name: "Who is using JS in production?"}
    ];
    var posts = new PostList(postItems);

    extend(PostList.prototype, paginationMixin);
    extend(PostList.prototype, sortMixin);

    posts.sortBy("id");
    expect(posts.page(1)).to.eql([
      {id: 2, name: "TDD in JavaScript"},
      {id: 3, name: "Why JS is better than Java?"}
    ]);

  });

});
