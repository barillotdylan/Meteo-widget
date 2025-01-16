"use client";

import { useState } from "react";

export default function Counter() {
	const [nbClick, setNbClicks] = useState(0);

	return (
		<button
			type="button"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg ml-auto"
			onClick={() => {
				setNbClicks(nbClick + 1);
			}}
		>
			❤️ {nbClick}
		</button>
	);}