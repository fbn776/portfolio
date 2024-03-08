"use client";

import { RefObject, useEffect } from "react";
import Entity from "./Entity";
import { randNumber } from "@/app/utils";

export default function useCanvasBg(canvasRef: RefObject<HTMLCanvasElement>) {
	useEffect(() => {
		const spritesArr: HTMLImageElement[] = [];

		for (let i = 0; i < 10; i++) {
			const img = new Image();
			img.src = `/bg-entity/blob (${i}).svg`;

			spritesArr.push(img);
		}

		Entity.sprites = spritesArr;

		const canvas = canvasRef.current;

		if (!canvas) return;

		let width = window.innerHeight,
			height = window.innerHeight;

		const ctx = canvas.getContext("2d");

		if (!ctx) return;

		canvas.width = width;
		canvas.height = height;

		const resize = () => {
			canvas.width = width = window.innerWidth;
			canvas.height = height = window.innerHeight;
		};

		window.addEventListener("resize", resize);

		/**For some reason, `width` doesn't reflect the actual value at the 1st run each time. It's more like half the screen's width (donno why).
		 * And this works, again not really sure why.
		 */
		setTimeout(resize, 0);

		const entityArr: Entity[] = [];

		let drawID: number;
		let now;
		let lastTime = Date.now();
		const draw = () => {
			now = Date.now();
			const dt = (now - lastTime) / 1000.0;
			ctx.clearRect(0, 0, width, height);

			if (Math.random() < 0.1) generateEntity(width, height, entityArr);

			for (let i = 0; i < entityArr.length; i++) {
				const entity = entityArr[i];

				if (entity.isDead()) {
					entityArr.splice(i--, 1);
					continue;
				}

				entity.update(dt);
				entity.draw(ctx);
			}
			lastTime = now;
			drawID = requestAnimationFrame(draw);
		};

		draw();

		return () => {
			canvas.removeEventListener("resize", resize);
			cancelAnimationFrame(drawID);
		};
	}, []);
}

function generateEntity(width: number, height: number, entityArr: Entity[]) {
	const size = 100;
	const leftExtreme = 100,
		rightExtreme = width - 100,
		topExtreme = 100,
		bottomExtreme = height - 100;

	const pos =
		Math.random() > 0.5
			? {
					x: Math.random() > 0.5 ? leftExtreme : rightExtreme,
					y: randNumber(topExtreme, bottomExtreme),
			  }
			: {
					x: randNumber(leftExtreme, rightExtreme),
					y: Math.random() > 0.5 ? topExtreme : bottomExtreme,
			  };
	const vel = {
		x: Math.floor(randNumber(-10, 10)),
		y: Math.floor(randNumber(-10, 10)),
	};

	entityArr.push(
		new Entity({
			pos,
			vel,
			size,
		})
	);
}
