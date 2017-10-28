var AmazonDapp = artifacts.require("./AmazonDapp.sol");

contract('AmazonDapp', function(accounts) {
  it("Testing Joining", function() {
    var amazon;
    var acc1 = accounts[0];
    var acc1balance;
    var acc1name;

    return AmazonDapp.deployed().then(function(instance) {
      amazon = instance;
      return amazon.join.call("David");
    }).then(function() { 
    //   return amazon.getOwnerBalance.call(acc1);;
    // }).then(function(result) {
    //   acc1balance = result;
      return amazon.getOwnerName.call(accounts[0]);
    }).then(function(result) {
      acc1balance = result;
      assert.equal(result.toString(), 9, "Balance should be zero")
      // assert.equal(result, "David", "Name should be 'David'")
      // assert.equal(acc1items, [], "Items should be empty")
      // assert.equal(instance.owners, result, "greeting should match constructor argument")
    })
  });
});


// }).then(function() {
//   acc1balance = amazon.getOwnerBalance.call(acc1);  
//   acc1name = amazon.getOwnerName.call(acc1);    
//   acc1items = amazon.getOwnerItems.call(acc1);
// }).then(function(result) {
//   assert.equal(acc1balance, 0, "Balance should be zero")
//   assert.equal(acc1name, "David", "Name should be 'David'")
//   assert.equal(acc1items, [], "Items should be empty")