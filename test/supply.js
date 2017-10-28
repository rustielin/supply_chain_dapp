var AmazonDapp = artifacts.require("./AmazonDapp.sol");

contract('AmazonDapp', function(accounts) {
  it("Testing Joining", function() {
    return AmazonDapp.deployed()
      .then(function(instance) {
        /* CALL the greet function */
        // instance.greeter("test greeting");
        return instance.join.call();
      })
      .then(function(result) {
        assert.equal(args._greeting, result, "greeting should match constructor argument")
      })
  });
});
