import games from './_games.js';

const contents = JSON.stringify(games.map(game => {
	return {
		title: game.title,
    slug: game.slug,
    cover: game.cover,
    categories: game.categories,
    runners: game.runners
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}