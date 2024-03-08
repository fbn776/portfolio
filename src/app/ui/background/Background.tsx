"use client";

import { useRef, memo } from "react";
import useCanvasBg from "./logic/useCanvasBg";

function Background() {
	const canvasElm = useRef<HTMLCanvasElement>(null);


	useCanvasBg(canvasElm);

	return (
		<>
			<canvas
				className="fixed inset-0 -z-50 opacity-10"
				ref={canvasElm}
			></canvas>
		</>
	);
}

export default memo(Background);
