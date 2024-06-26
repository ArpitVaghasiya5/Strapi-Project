'use strict';

/**
 * task-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-component.task-component');
