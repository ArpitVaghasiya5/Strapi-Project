module.exports = ({ env }) => ({
    // ..
   'transformer': {
      enabled: false,
      config: {
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
        requestTransforms : {
          wrapBodyWithDataKey: true
        },
        hooks: {
          preResponseTransform : (ctx) => console.log('hello from the preResponseTransform hook!'),
          postResponseTransform : (ctx) => console.log('hello from the postResponseTransform hook!')
        },
        contentTypeFilter: {
          mode: 'allow',
          uids: {
            'api::article.article': true,
            'api::category.category': {
              'GET':true,
            },
            'api::task-component.task-component': {
              'GET': true,
            },
            'api::dynamic-component.dynamic-component':{
              'GET' : true,
            } 
          }
        },
        plugins: {
          ids: {
            'slugify': true,
          }
        }
      }
    },
    // ..
  });