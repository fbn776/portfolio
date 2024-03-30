import { Vec2D } from "@/app/lib/types";
import { clampVec, mapValue } from "@/app/lib/utils";

export default class Entity {
	// Vectors
	private pos: Vec2D;
	private vel: Vec2D;
	private acc: Vec2D;

	//Attributes
	private age: number = 0;
	private angle: number = 0;
	private angleVel: number;
	private size: number;
	private dampFactor: number;

	private sprite: HTMLImageElement;
	private cs: number = 0;
	private initialOpacity: number;
	private opacity: number;
	private lifeSpan: number = 10;
	// Once age surpasses weakLife, the entity starts to fade.
	private weakLife: number;
	private scale;
	private strongLife;

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
		this.acc = { x: 0, y: 0 };

		this.sprite =
			Entity.sprites[Math.floor(Math.random() * Entity.sprites.length)];
		this.size = data.size;
		this.dampFactor = this.size * 0.1;
		this.cs = this.size / 2;
		this.angleVel = data.angleVel;
		this.opacity = this.initialOpacity = data.startOpacity;

		this.scale = 0;
		// When the object should start to fade
		this.weakLife = this.lifeSpan * 0.8;
		// When the object should reach max scale
		this.strongLife = this.lifeSpan * 0.1;
	}

	isDead() {
		return this.age >= this.lifeSpan;
	}

	applyForce(force: Vec2D) {
		// F = ma => a = F/m
		this.acc.x += force.x / this.dampFactor;
		this.acc.y += force.y / this.dampFactor;
	}

	update(dt: number) {
		this.scale =
			this.age <= this.strongLife
				? mapValue(this.age, 0, this.strongLife, 0, 1)
				: 1;

		if (this.age >= this.weakLife) {
			this.opacity = mapValue(
				this.age,
				this.weakLife,
				this.lifeSpan,
				this.initialOpacity,
				0
			);
		}

		// Update velocity (v = u + at)
		this.vel.x += this.acc.x * dt;
		this.vel.y += this.acc.y * dt;
		console.log(this.vel);

		clampVec(this.vel, -50, 50);

		// Update position
		this.pos.x += this.vel.x * dt;
		this.pos.y += this.vel.y * dt;

		// Reset acceleration
		this.acc.x = 0;
		this.acc.y = 0;

		this.angle += this.angleVel * dt;
		this.age += dt;
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.beginPath();
		ctx.save();
		ctx.globalAlpha = this.opacity;

		ctx.translate(this.pos.x, this.pos.y);
		ctx.rotate(this.angle);
		ctx.scale(this.scale, this.scale);
		ctx.drawImage(this.sprite, -this.cs, -this.cs, this.size, this.size);

		ctx.globalAlpha = 1;
		ctx.restore();
		ctx.closePath();
	}
}
