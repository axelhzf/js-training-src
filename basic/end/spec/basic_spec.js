describe("Basic test", function () {

    it("test1 suma los números del 1 al 100", function () {
        expect(test1()).to.equal(5050);
    });

    it("test2 suma los números pares del 1 al 100", function () {
        expect(test2()).to.equal(2550);
    });

    it("test3 función con la concatenación de dos strings en mayúsculas", function () {
        expect(test3("hello", "world")).to.equal("HELLO WORLD");
    });

    it("test4 crea un array con los números pares del 1 al 100", function () {
        var result = test4();
        expect(result.length).to.equal(50);
        expect(result[0]).to.equal(2);
        expect(result[1]).to.equal(4);
        expect(result[49]).to.equal(100);
    });

    it("test5 elimina los elementos duplicados de un array", function () {
        expect(test5(["a", "b", "a", "c", "b"])).to.deep.equal(["a", "b", "c"]);
    });

    it("test6 devuelve las claves y los valores de un objeto", function () {
        var obj = {key1 : "value1", key2 : "value2"};
        var result = test6(obj);
        expect(result.keys).to.deep.equal(["key1", "key2"]);
        expect(result.values).to.deep.equal(["value1", "value2"]);
    });

    it("test7 crea una función que comprueba si es un email valido", function () {
        expect(test7("axelhzf@gmail.com")).to.be.true;
        expect(test7("not an email")).to.be.false;
    });

});
