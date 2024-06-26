'use strict';

/**
 * dynamic-component router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dynamic-component.dynamic-component');
