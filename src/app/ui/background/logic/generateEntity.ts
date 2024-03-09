"use client";
import { Vec2D } from "@/app/types";
import Entity from "./Entity";
import { mapValue, normalizeVec, randNumber } from "@/app/utils";

function getRandPosInRect(
	leftExtreme: number,
	rightExtreme: number,
	topExtreme: number,
	bottomExtreme: number
): Vec2D {
	const side = Math.floor(randNumber(1, 4));
	
	switch(side) {
		case 1:
			return {
				x: randNumber(leftExtreme, rightExtreme),
				y: topExtreme
			};
		case 2:
			return {
				x: rightExtreme,
				y: randNumber(topExtreme, bottomExtreme),
			};
		case 3:
			return {
				x: randNumber(leftExtreme, rightExtreme),
				y: bottomExtreme
			};
		default:
			return {
				x: leftExtreme,
				y: randNumber(topExtreme, bottomExtreme),
			};
	}
}

export function generateEntity(
	width: number,
	height: number,
	entityArr: Entity[]
) {
	console.log(width, height);
	
	const minSize = 80;
	const maxSize = 400;

	const size = Math.floor(randNumber(minSize, maxSize));
	const startOpacity = mapValue(size, minSize, maxSize, 0.5, 1);
	const angleVel = mapValue(size, minSize, maxSize, 1, 0.01);
	const lifeSpan = Math.floor(randNumber(15, 30));


	const leftExtreme = -size,
		rightExtreme = width + size,
		topExtreme = -size,
		bottomExtreme = height + size;

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
		y: targetPos.y - pos.y
	}

	normalizeVec(diff);

	diff.x *= 10;
	diff.y *= 10;

	const vel = diff;


	
	entityArr.push(
		new Entity({
			pos,
			vel,
			size,
			angleVel,
			startOpacity,
			lifeSpan
		})
	);
}
