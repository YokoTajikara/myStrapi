'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('prod-generate')
      .service('myService')
      .getWelcomeMessage();
  },
});
