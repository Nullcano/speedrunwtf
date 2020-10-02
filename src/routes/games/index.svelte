<script context="module">
	export function preload() {
		return this.fetch(`games.json`).then(r => r.json()).then(games => {
			return { games };
		});
	}
</script>

<script>
	export let games;
</script>

<style>
	article {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  img {
    width: 160px;
    border-radius: .5rem;
  }
</style>

<svelte:head>
	<title>Games - speedrun.wtf</title>
</svelte:head>

<h1>Games</h1>

<section>
	{#each games as game}
		<article>
      <a rel="prefetch" href="games/{game.slug}">
        <img src={game.cover} alt={game.title}/>
        <h2>{game.title}</h2>
      </a>
      <span>{game.categories} categories</span>
      <span>{game.categories} runners</span>
    </article>
	{/each}
</section>