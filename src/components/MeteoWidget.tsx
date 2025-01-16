import Link from "next/link";
import Counter from "./Counter";
import Title from "./Title";

interface MeteoWidgetProps {
	city: string;
}

export default async function MeteoWidget({ city }: MeteoWidgetProps) {
	const apiKeyFromEnvFile = process.env.KEY_API;

	const apiUrl = process.env.API_URL;

	const response = await fetch(
		`${apiUrl}/weather?q=${city}&appid=${apiKeyFromEnvFile}&units=metric&lang=fr`,
	);
	const data = await response.json();
	console.log(data.main.temp);

	return (
		<Link
			href={`/meteo/${city}`}
			className="border p-4 rounded-lg bg-gray-50/30 w-2/3 md:w-1/3 hover:bg-gray-50/50 flex items-center"
		>
			<img
				src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
				alt={data.weather[0].main}
			/>
			<div>
				<Title level={2}>{city}</Title>
				<div className="text-2xl font-bold">{data.main.temp} °C</div>
			</div>
			<Counter />
		</Link>
	);
}