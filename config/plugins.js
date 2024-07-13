 module.exports = ({ env }) => ({
   'transformer': {
      enabled: true,
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
    'strapi-plugin-populate-deep': {
      config: {
        defaultDepth: 4,
      }
    },
    // email: {
    //   config: {
    //     provider: 'nodemailer',
    //     providerOptions: {
    //       service: 'gmail',
    //       auth: {
    //         user: 'arpit.vaghasiya@thegateaycorp.co.in',
    //         pass: ''
    //       },
    //     },
    //     settings: {
    //       defaultFrom: 'arpit.vaghasiya@thegatewaycorp.co.in',
    //       defaultReplyTo: 'arpitvb152@gmail.com',
    //     },
    //   },
    // },
  });