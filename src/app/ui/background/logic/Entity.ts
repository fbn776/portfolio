import { Vec2D } from "@/app/types";
import { mapValue } from "@/app/utils";

export default class Entity {
	private age: number = 0;
	private pos: Vec2D;
	private vel: Vec2D;
	private angle: number = 0;
	private angleVel: number;
	private sprite: HTMLImageElement;
	private size: number;
	private cs: number = 0; // size / 2
	private initialOpacity: number;
	private opacity: number;
	private lifeSpan: number = 10;
	// Once age surpasses weakLife, the entity starts to fade.
	private weakLife: number;

	static sprites: HTMLImageElement[] = [];

	constructor(data: {
		pos: Vec2D;
		vel: Vec2D;
		lifeSpan?: number;
		size: number;
		angleVel: number;
		startOpacity: number;
	}) {
		this.lifeSpan = data.lifeSpan || 10;
		this.pos = data.pos;
		this.vel = data.vel;
		this.sprite =
			Entity.sprites[Math.floor(Math.random() * Entity.sprites.length)];
		this.size = data.size;
		this.cs = this.size / 2;
		this.angleVel = data.angleVel;
		this.opacity = this.initialOpacity = data.startOpacity;

		this.weakLife = this.lifeSpan * 0.8;
	}

	isDead() {
		return this.age >= this.lifeSpan;
	}

	update(dt: number) {
		if (this.age >= this.weakLife) {
			this.opacity = mapValue(
				this.age,
				this.weakLife,
				this.lifeSpan,
				this.initialOpacity,
				0
			);
		}

		this.pos.x += this.vel.x * dt;
		this.pos.y += this.vel.y * dt;

		this.angle += this.angleVel * dt;
		this.age += dt;
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.beginPath();
		ctx.save();
		ctx.globalAlpha = this.opacity;

		ctx.translate(this.pos.x, this.pos.y);
		ctx.rotate(this.angle);
		ctx.drawImage(this.sprite, -this.cs, -this.cs, this.size, this.size);
		ctx.fillStyle = "red";
		ctx.fillRect(0, 0, 10, 10);
		ctx.globalAlpha = 1;
		ctx.restore();
		ctx.closePath();
	}
}
