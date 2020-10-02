<script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;
		const res = await this.fetch(`games/${slug}.json`);
		const game = await res.json();
		return { game };
	}
</script>

<script>
	export let game;
</script>

<svelte:head>
	<title>{game.title} - speedrun.wtf</title>
</svelte:head>

<h1>{game.title}</h1>

<div class='content'>
	{@html game.html}
</div>