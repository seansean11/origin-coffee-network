'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Trade transaction
 * @param {org.origincoffee.biznet.Trade} trade
 * @transaction
 */
function onTrade(trade) {
  trade.coffee.owner = trade.newOwner;

  return getAssetRegistry('org.origincoffee.biznet.Coffee')
    .then(function (coffeeRegistry) {
      return coffeeRegistry.update(trade.coffee);
    });
}