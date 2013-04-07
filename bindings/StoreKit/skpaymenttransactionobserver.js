// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("SKPaymentTransactionObserver");
exports.SKPaymentTransactionObserver = SKPaymentTransactionObserver = objc.bindProtocol(foundation.Protocol,
  function SKPaymentTransactionObserver () {
    return SKPaymentTransactionObserver.__super__.constructor.apply(this, arguments);
  }, {

    // Handling Transactions
    updatedTransactions: objc.requiredMethod("paymentQueue:updatedTransactions:"),
    removedTransactions: objc.optionalMethod("paymentQueue:removedTransactions:"),

    // Handling Restored Transactions
    restoreCompletedTransactionsFailedWithError:      objc.optionalMethod("paymentQueue:restoreCompletedTransactionsFailedWithError:"),
    paymentQueueRestoreCompletedTransactionsFinished: objc.optionalMethod("paymentQueueRestoreCompletedTransactionsFinished:")

});
