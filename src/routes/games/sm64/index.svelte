<script context="module">
	export function preload() {
		return this.fetch(`games/sm64.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	.grid {
		display: flex;
    flex-wrap: wrap;
	}
  a {
    width: 180px;
    height: 220px;
    margin: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    background: #FC354C;
    background: -webkit-linear-gradient(-45deg, #0ABFBC, #FC354C);
    background: linear-gradient(-45deg, #0ABFBC, #FC354C);
    border-radius: .5rem;
  }

  @media screen and (max-width: 40rem) { 
    a { 
      width: 100%;
    }
  }
</style>

<svelte:head>
	<title>Super Mario 64 - speedrun.wtf</title>
</svelte:head>

<h1>Super Mario 64</h1>

<div class="grid">
	{#each posts as post}
	  <a rel="prefetch" href="games/sm64/{post.slug}">
      <span>{post.title}</span>
    </a>
	{/each}
</div>