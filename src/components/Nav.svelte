<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
    background: #111;
  }
  
	ul {
    margin: 0 auto;
    padding: 0;
    max-width: 1140px;
    display: flex;
    align-items: center;
	}

	li {
    margin: .5rem;
		list-style: none;
	}

	a {
    text-decoration: none;
		padding: .5rem 1rem;
	}

  img {
    height: 40px;
  }
</style>

<nav>
	<ul>
		<li>
      <a aria-current="{segment === undefined ? 'page' : undefined}" href=".">
        <img src="../logo.png" alt="speedrun logo">
      </a>
    </li>
		<li>
      <a rel=prefetch aria-current="{segment === 'games' ? 'page' : undefined}" href="games">
        Games
      </a>
    </li>
		<li>
      <a aria-current="{segment === 'submit' ? 'page' : undefined}" href="submit">
        Submit
      </a>
    </li>
	</ul>
</nav>