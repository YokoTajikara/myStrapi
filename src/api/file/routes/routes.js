module.exports = {
	routes: [
		{
			method: 'GET',
			path: '/duplicate-file',
			handler: 'file-controller.duplicateFile',
		},
		{
			method: 'GET',
			path: '/upload-corp-strapi',
			handler: 'file-controller.uploadCorpReleases',
		}
	],
};
