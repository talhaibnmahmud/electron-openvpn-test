import { useState } from "react";

export default function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="grid gap-8">
			<div className="">
				<h1 className="text-white text-3xl text-center font-semibold">
					💖 Hello World!
				</h1>
				<p className="text-gray-200 text-center">
					Welcome to your Electron application.
				</p>
			</div>

			<div className="grid justify-center">
				<p className="text-gray-200 text-center">
					Count is: <span className="font-semibold">{count}</span>
				</p>

				<div className="flex justify-center gap-4">
					<button
						id="inc"
						onClick={() => setCount((prev) => prev + 1)}
						className="bg-white text-black font-semibold px-4 py-2 rounded-full mt-4"
					>
						Increment
					</button>
					<button
						id="dec"
						onClick={() =>
							setCount((prev) => (prev < 1 ? 0 : prev - 1))
						}
						className="bg-white text-black font-semibold px-4 py-2 rounded-full mt-4"
					>
						Decrement
					</button>
				</div>
			</div>
		</div>
	);
}
