<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);

	let temp = data.props.data.hourly[0].temp;
	let feelsLike = data.props.data.hourly[0].feels_like;
	let description = data.props.data.hourly[0].weather[0].description;
	let icon = data.props.data.hourly[0].weather[0].icon;
</script>

<div id="container">
	{#if data !== ""}
    <h1>Ottawa, ON</h1>
    <img id="icon" src="https://openweathermap.org/img/wn/{icon}@2x.png" alt="">
		<p>{description}</p>
		<p>Temperature {temp}</p>
		<p>Feels Like {feelsLike}</p>
	{/if}
</div>

<style>
 #container {
  background-color: #9286f0;
  border-radius: 30px;
  padding: 1em;
  margin: 1em;

  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.1);
 }
 h1 {
  text-align: center;
  color:#ffffe4;
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
</style>
