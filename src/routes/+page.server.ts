import type { PageServerLoad } from "./$types";
import { WEATHER_API_KEY } from "$env/static/private";

const lat = "45.424721";
const lon = "-75.695000";
const part = "current";
const units = "metric";

export const load = (async ({ fetch }) => {
	const res = await fetch(
		`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${WEATHER_API_KEY}&units=${units}`,
		{
			method: "GET"
		}
	);

	const data = await res.json();
	return {
		props: {
			data: data
		}
	};
}) satisfies PageServerLoad;
