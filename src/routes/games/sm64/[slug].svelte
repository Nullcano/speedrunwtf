<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`games/sm64/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
  .back {
    display: block;
    margin-bottom: 1rem;
  }

  .info, .player {
    margin: .5rem;
    padding: .5rem 1rem;
    background: rgba(0,0,0,.3);
    border-radius: .5rem;
    display: flex;
    justify-items: stretch;
  }

  .player:hover {
    transform: scale(1.05);
  }

  a {
    text-decoration: none;
  }

  span {
    width: 33.333%;
  }
</style>

<svelte:head>
	<title>{post.title} - Super Mario 64 - speedrun.wtf</title>
</svelte:head>

<a class="back" href="games/sm64"><i class="fas fa-chevron-left"></i> Go back</a>
<h1>{post.title}</h1>
<div class="info">
  <span>Rank</span>
  <span>Player</span>
  <span>Time</span>
</div>
{#each post.leaderboard as player}
  <a href={player.videoURL} target="_blank">
    <div class="player">
      <span>{player.rank}</span>
      <span>{player.name}</span>
      <span>{player.time}</span>
    </div>
  </a>
{/each}