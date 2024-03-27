"use client";
import { Vec2D } from "@/app/lib/types";
import Entity from "./Entity";
import { mapValue, normalizeVec, randNumber } from "@/app/lib/utils";

function getRandPosInRect(
	leftExtreme: number,
	rightExtreme: number,
	topExtreme: number,
	bottomExtreme: number
): Vec2D {
	return {
		x: randNumber(leftExtreme, rightExtreme),
		y: randNumber(topExtreme, bottomExtreme),
	};
}

export function generateEntity(
	width: number,
	height: number,
	entityArr: Entity[]
) {
	const minSize = 150;
	const maxSize = 400;

	const size = Math.floor(randNumber(minSize, maxSize));
	const startOpacity = mapValue(size, minSize, maxSize, 0.5, 1);
	const angleVel = mapValue(size, minSize, maxSize, 1, 0.01);
	const lifeSpan = Math.floor(randNumber(15, 30));
	const velMag = Math.floor(randNumber(4, 15));

	const leftExtreme = 0,
		rightExtreme = width,
		topExtreme = 0,
		bottomExtreme = height;

	const pos = getRandPosInRect(
		leftExtreme,
		rightExtreme,
		topExtreme,
		bottomExtreme
	);

	const targetLeft = 0.1 * width,
		targetTop = 0.1 * height;

	const targetPos = getRandPosInRect(
		targetLeft,
		width - targetLeft,
		targetTop,
		height - targetTop
	);

	const diff = {
		x: targetPos.x - pos.x,
		y: targetPos.y - pos.y,
	};

	normalizeVec(diff);

	diff.x *= velMag;
	diff.y *= velMag;

	const vel = diff;

	entityArr.push(
		new Entity({
			pos,
			vel,
			size,
			angleVel,
			startOpacity,
			lifeSpan,
		})
	);
}
