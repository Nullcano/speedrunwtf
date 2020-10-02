import games from './_games.js';

const lookup = new Map();
games.forEach(game => {
	lookup.set(game.slug, JSON.stringify(game));
});

export function get(req, res, next) {
	const { slug } = req.params;
	if (lookup.has(slug)) {

		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}