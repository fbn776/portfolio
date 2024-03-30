import { Vec2D } from "./types";

export function randNumber(min: number, max: number): number {
	return Math.random() * (max - min + 1) + min;
}

export function vecLen(vec: Vec2D) {
	return Math.sqrt(vec.x * vec.x - vec.y * vec.y);
}

export function normalizeVec(vec: Vec2D) {
	const len = vecLen(vec);
	vec.x /= (len || 1);
	vec.y /= (len || 1);
}

export function clampVec(vec: Vec2D, min: number, max: number) {
	vec.x = Math.min(max, Math.max(min, vec.x));
	vec.y = Math.min(max, Math.max(min, vec.y));
}

export function mapValue(
	value: number,
	fromMin: number,
	fromMax: number,
	toMin: number,
	toMax: number
): number {
	return ((value - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin;
}
