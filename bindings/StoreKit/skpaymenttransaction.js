// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.SKPaymentTransaction = SKPaymentTransaction = objc.bindClass(NSObject,
  function SKPaymentTransaction () {
    return SKPaymentTransaction.__super__.constructor.apply(this, arguments);
  }, {

    // Getting Information About the Transaction
    error: objc.instanceProperty(),
    payment: objc.instanceProperty(),
    transactionState: objc.instanceProperty(),
    transactionIdentifier: objc.instanceProperty(),
    transactionReceipt: objc.instanceProperty(),
    transactionDate: objc.instanceProperty(),

    // Restored Transactions
    originalTransaction: objc.instanceProperty()

});
