import { RefObject, useEffect } from "react";
import Entity from "./Entity";
import { generateEntity } from "./generateEntity";
import { clampVec, mapValue, normalizeVec } from "@/app/lib/utils";

export default function useCanvasBg(canvasRef: RefObject<HTMLCanvasElement>) {
	useEffect(() => {
		const scrollData = {
			x_: 0,
			y_: 0,
			x: 0,
			y: 0,
		};

		const spritesArr: HTMLImageElement[] = [];

		for (let i = 0; i < 12; i++) {
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
		const entityArr: Entity[] = [];

		if (!ctx) return;

		canvas.width = width;
		canvas.height = height;

		const resize = () => {
			canvas.width = width = window.innerWidth;
			canvas.height = height = window.innerHeight;
		};

		const getScrollData = () => {
			scrollData.x_ = scrollData.x;
			scrollData.y_ = scrollData.y;
			scrollData.x = window.scrollX;
			scrollData.y = window.scrollY;

			const force = {
				x: (window.scrollX - scrollData.x_) * 30,
				y: (window.scrollY - scrollData.y_) * 30,
			};

			clampVec(force, -500, 500);

			const velMag = Math.abs(mapValue(force.y, -500, 500, -100, 100));

			normalizeVec(force);

			force.x *= velMag;
			force.y *= velMag;

			// console.log(force, velMag);

			for (let entity of entityArr) {
				entity.applyForce(force);
			}
		};

		window.addEventListener("resize", resize);

		window.addEventListener("scroll", getScrollData);

		/**For some reason, `width` doesn't reflect the actual value at the 1st run each time. It's more like half the screen's width (donno why).
		 * And this works, again not really sure why.
		 */
		setTimeout(resize, 0);

		let drawID: number;
		let now;
		let lastTime = Date.now();
		const draw = () => {
			now = Date.now();
			const dt = (now - lastTime) / 1000.0;
			ctx.clearRect(0, 0, width, height);

			if (Math.random() < 0.05 && entityArr.length < 10)
				generateEntity(width, height, entityArr);

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

		// Clean up the useEffect
		return () => {
			canvas.removeEventListener("resize", resize);
			window.removeEventListener("scroll", getScrollData);
			cancelAnimationFrame(drawID);
		};
	}, []);
}
