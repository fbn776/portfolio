"use client";
import { Vec2D } from "@/app/types";
import Entity from "./Entity";
import { normalizeVec, randNumber } from "@/app/utils";
import { Debug } from "./useCanvasBg";

function getRandPosInRect(
	leftExtreme: number,
	rightExtreme: number,
	topExtreme: number,
	bottomExtreme: number
): Vec2D {
	return Math.random() > 0.5
		? {
				x: Math.random() > 0.5 ? leftExtreme : rightExtreme,
				y: randNumber(topExtreme, bottomExtreme),
		  }
		: {
				x: randNumber(leftExtreme, rightExtreme),
				y: Math.random() > 0.5 ? topExtreme : bottomExtreme,
		  };
}

export function generateEntity(
	width: number,
	height: number,
	entityArr: Entity[]
) {
	const size = 100;
	const leftExtreme = 100,
		rightExtreme = width - 100,
		topExtreme = 100,
		bottomExtreme = height - 100;

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
		})
	);
}
