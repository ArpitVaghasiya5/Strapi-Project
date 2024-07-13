'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const {entityServices} = require("@strapi/strapi").factories; 

module.exports = createCoreController('api::category.category', ({strapi}) => ({
    async CustomController(ctx)  {
        try {
            ctx.body = "Calling from custom controller";
        } catch (error){
            ctx.body = error;
        }
    }, 
    async find(ctx) {
        ctx.query = {...ctx.query};
        const{data, meta} = await super.find(ctx);
        meta.title = "Titleee"

        const modifiedData = data.map(item => {
            const { id, ...rest } = item;
            return rest;
        });

        return {data : modifiedData, meta}
    },
    onlyTitle : async(ctx, next) => {
        try {
            const filteredData = await strapi.entityService.findMany('api::category.category', {
                fields : ["id","title"],
            })
            return filteredData;
        } catch (err){
            ctx.body = err;
        }
    }
}));