<script lang="ts">
	import CurrentTemp from "$lib/Current-temp.svelte";
	export let data;
</script>

<h1 id="title">Weather App</h1>
<CurrentTemp {data}/>

<style>
	#title {
		color: Black;
		font-family: "arimo", sans-serif;
		font-size: 2em;
	}
</style>
