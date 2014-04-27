describe("Functional", function () {

  var clients = [
    {firstName: "Princess", lastName: "Hernández", balance: 50},
    {firstName: "Darth", lastName: "Vader", balance: -20},
    {firstName: "Luke", lastName: "Skywalker", balance: -30},
    {firstName: "Han", lastName: "Solo", balance: 100}
  ];

  it("cuenta los clientes con balance positivo y negativo", function () {
    expect(test1(clients)).to.eql({
      positive: 2,
      negative: 2
    });
  });

  it("suma el total de todos los balances", function () {
    expect(test2(clients)).to.equal(100);
  });

  it("suma el total de balances positivos y negativos", function () {
    expect(test3(clients)).to.eql({
      positive: 150,
      negative: -50
    });
  });

  it("nombre de los dos clientes más moroso en mayúsculas", function () {
    expect(test4(clients)).to.eql(["LUKE", "DARTH"]);
  });

});
