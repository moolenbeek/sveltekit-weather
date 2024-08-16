<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);

  let temp = data.props.data.hourly[0].temp;
  let feelsLike = data.props.data.hourly[0].feels_like;
</script>

<h1 id="title">Weather App</h1>

{#if temp !== ""}
  <p>Temperature {temp}</p>
  <p>Feels Like {feelsLike}</p>
{/if}

<style>
	#title {
		color: Black;
		font-family: 'arimo', sans-serif;
		font-size: 2em;
	}
</style>
