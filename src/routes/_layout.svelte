<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 1140px;
		background-color: #111;
		padding: 2em;
		margin: 1em auto;
		box-sizing: border-box;
  }
  @media screen and (max-width: 40rem) { 
    main {
      padding: 1rem;
    }
  }
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>