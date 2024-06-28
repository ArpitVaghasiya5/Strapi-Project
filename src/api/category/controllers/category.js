'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({strapi}) => ({
    async CustomController(ctx)  {
        try {
            ctx.body = "Calling from custom controller";
        } catch (error){
            ctx.body = error;
        }
    }
}));
