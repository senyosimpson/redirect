export default {
	async fetch(request): Promise<Response> {
		const destinationURL = "https://senyosimpson.github.io/letter";
		const statusCode = 301;
		return Response.redirect(destinationURL, statusCode);
	},
} satisfies ExportedHandler;
