var vendingMachine = (function() {
  var items = [
  { id: "A1", label: "Reese's", price: 2.00, toString: function() { return this.label; } },
  { id: "A2", label: "Aquafina", price: 2.50, toString: function() { return this.label; } },
  { id: "A3", label: "Butterfinger", price: 2.00, toString: function() { return this.label; } },
  { id: "A4", label: "Lay's Chips", price: 1.50, toString: function() { return this.label; } }
  ]

    var vend = function(money, id) {
      // verify money receieved is greater or equal to the cheapest item
      // verify the items exist
      var item = findItem(id);
      var msg, item_or_refund;
      var toMoney = item.price.toFixed(2)

        if (money.toFixed(2) >= toMoney) {
          msg = ('Vended ' + item.label + 'for' + '$' + toMoney + ' .')
            return item_or_refund = item;
        }
        else {
          msg = "Sorry, funds insufficient for purchase."
            return item_or_refund = money;
        }
      console.log(msg);

      return item;
    };

  var findItem = function(id) {
    return items.filter(function(item) {return id.toString() == item.id.toString(); })[0];
  };

  var menu = function() {
    items.forEach(function(item) {
      console.log(item.id + ': ' + item.label)
    });
  };

  return {
    vend:vend,
    menu:menu
  };
})();

console.log(vendingMachine.vend(2.00, "A3"));
console.log(vendingMaching.vend(5.00, "A3"));


//VendingMachine.menu()
