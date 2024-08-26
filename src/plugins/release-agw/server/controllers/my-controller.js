'use strict';

module.exports = ({ strapi }) => ({
	index(ctx) {
		ctx.body = strapi
			.plugin('release-agw')
			.service('myService')
			.getWelcomeMessage();
	},
});
