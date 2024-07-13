
module.exports = {
    beforeCreate(event) {
      const { data, where, select, populate } = event.params;
  
      event.params.data.title = event.params.data.title + " title(LifeCycleHook)";
    },
  
    afterCreate(event) {
      const { result, params } = event;
  
      console.log({event});
    //   try{
    //       const info =  strapi.plugin('email').services.email.send({
    //         to : 'abvaghasiya202@gmail.com',
    //         subject : 'New Category added',
    //         text : 'Category',
    //         html : 'Category'
    //       })
    //       console.log({info})
    //   } catch (err){
    //     console.log(err);
    //   }
     },
  };