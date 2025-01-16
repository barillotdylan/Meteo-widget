export default function Title({
	level,
	children,
}: {
	level: number;
	children: React.ReactNode;
}) {
	return (
		<h1
			className={`text-sky-100 font-bold text-3xl mb-4 text-center ${level === 1 ? "text-2xl" : "text-xl"}`}
		>
			{children}
		</h1>
	);
}