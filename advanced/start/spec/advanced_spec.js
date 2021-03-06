describe("Advanced", function () {

    it("map", function () {
        var multiplyByTwo = function (a) {
            return a * 2;
        };
        expect(map([1, 2, 3], multiplyByTwo)).to.deep.equal([2, 4, 6]);
    });

    it("curry", function () {
        function add (x, y) {
            return x + y;
        }
        var inc = curry(add, 1);
        expect(inc(10)).to.equal(11);
        expect(inc(23)).to.equal(24);
    });

    it("memoization", function () {
        var multiplyByTwo = function (a) {
            return a * 2;
        };
        var multiplyByTwoSpy = sinon.spy(multiplyByTwo);
        var multiplyByTwoMemoized = memoize(multiplyByTwoSpy);

        expect(multiplyByTwoMemoized(1)).to.equal(2);
        expect(multiplyByTwoMemoized(1)).to.equal(2);

        expect(multiplyByTwoSpy.calledOnce).to.be.true;
    });

});
