

import MeteoWidget from "../components/MeteoWidget";

export default function Home() {

	return (
		<div className="flex gap-4 justify-center flex-wrap">
			<MeteoWidget city="Paris" />
			<MeteoWidget city="Nancy" />
			<MeteoWidget city="Dijon" />
			<MeteoWidget city="Caen" />
			<MeteoWidget city="La Rochelle" />
			<MeteoWidget city="Gap" />
		</div>
	);
}