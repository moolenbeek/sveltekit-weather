<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);

	let temp = data.props.data.hourly[0].temp;
	let feelsLike = data.props.data.hourly[0].feels_like;
	let description = data.props.data.hourly[0].weather[0].description;
</script>

{#if data !== ""}
	<p>{description}</p>
	<p>Temperature {temp}</p>
	<p>Feels Like {feelsLike}</p>
{/if}
