
import type { WeatherResponse } from "../../../types/weather";
import Title from "@/components/Title";

export default async function City({
	params,
}: { params: Promise<{ city: string }> }) {
	const { city } = await params;
	const apiKeyFromEnvFile = process.env.KEY_API;

	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyFromEnvFile}&units=metric&lang=fr`,
	);
	const data = (await response.json()) as WeatherResponse;
	console.log(data.main.temp);

	return (
		<div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
  <Title level={2} className="text-3xl font-semibold mb-4 text-center">{city}</Title>
  <div className="text-5xl font-extrabold mb-2 text-center">{data.main.temp} °C</div>
  <div className="flex justify-center mb-4">
    <img
      src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
      alt={data.weather[0].main}
      className="w-16 h-16"
    />
  </div>
  <div className="text-center text-xl font-medium">
    <div>{data.weather[0].main}</div>
    <div className="text-sm text-gray-200">{data.weather[0].description}</div>
  </div>
</div>

	);
}