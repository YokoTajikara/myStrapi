const axios = require('axios');

module.exports = {
	async duplicateFile(ctx) {
		try {
			// 外部サーバーへのPOSTリクエストを送信
			const apiSecret = process.env.API_KEY;
			const domain = process.env.NEO_CORPORATE_DOMAIN_STG;
			const response = await axios.post(`${domain}/functions/TemplateGenerators/NewsTemplateGeneration.php`, {}, {
				headers: { 'Authorization': `Bearer ${apiSecret}` }
			});

			ctx.send({ message: 'Request successful', data: response.data });
		} catch (err) {
			// エラーが発生した場合はエラー応答を送信
			ctx.send({ message: 'Request failed', error: err.message }, 500);
		}
	},
	async uploadCorpReleases(ctx) {
		try {
			const apiSecret = process.env.API_KEY;
			const domain = process.env.HEROKU_STRAPI_UPLOAD_APP;
			const response = await axios.post(`${domain}/uploadCorpStrapiPage.php`, {}, {
				headers: { 'Authorization': `Bearer ${apiSecret}` }
			});

			ctx.send({ message: 'Request successful', data: response.data });
		} catch (err) {
			ctx.send({ message: 'Request failed', error: err.message }, 500);
		}
	}
};
