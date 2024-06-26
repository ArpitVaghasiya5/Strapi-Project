'use strict';

/**
 * dynamic-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dynamic-component.dynamic-component');
