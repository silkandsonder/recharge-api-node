'use strict';

const assign = require('lodash/assign');

const base = require('../mixins/base');

function Customer(recharge){
    this.recharge = recharge;

    this.name = 'customers';
    this.key = 'customer';
}

assign(Customer.prototype, base);

Customer.prototype.getPaymentSources = function paymentSources(id) {
    const url = this.buildUrl(id, undefined, 'payment_sources');
    return this.recharge.request(url, 'GET', 'payment_sources');
};

Customer.prototype.getDeliverySchedule = function deliverySchedule(id) {
    const url = this.buildUrl(id, undefined, 'delivery_schedule');
    return this.recharge.request(url, 'GET', undefined);
};

module.exports = Customer;