'use strict';

/**
 * whatsapp-number service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whatsapp-number.whatsapp-number');
