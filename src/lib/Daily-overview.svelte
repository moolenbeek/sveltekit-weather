<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);

	let description = data.props.data.hourly[0].weather[0].description;
	let icon = data.props.data.hourly[0].weather[0].icon;
	let min = data.props.data.daily[0].temp.min;
	let max = data.props.data.daily[0].temp.max;
</script>

<div id="container">
	{#if data !== ""}
		<p>Today</p>
		<h1>Ottawa, ON</h1>
		<p>{description}</p>
		<img id="icon" src="https://openweathermap.org/img/wn/{icon}@2x.png" alt="" />
		<div id="minMax">
			<p id="max">&#8593 <b>{max} &#8451</b></p>
			<p id="min">&#8595 {min} &#8451</p>
		</div>
	{/if}
</div>

<style>
	#container {
		background-color: #9286f0;
		border-radius: 30px;
		padding: 1em;
		margin: 1em;

		box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
	}
	h1 {
		text-align: center;
		color: #ffffe4;
		font-family: "archivo", sans-serif;
		font-size: 2em;
	}
	p {
		text-align: center;
		color: #ffffe4;
		font-family: "open-sans", sans-serif;
		font-size: 1em;
	}
	#icon {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
	#minMax {
		columns: 2;
		display: flex;
		justify-content: center;
		width: 80%;
		margin: 0 auto;
	}
	#min,
	#max {
		margin: 1em;
	}
</style>
