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
		this.sprite =
			Entity.sprites[Math.floor(Math.random() * Entity.sprites.length)];
		this.size = data.size;
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

		this.pos.x += this.vel.x * dt;
		this.pos.y += this.vel.y * dt;

		this.angle += this.angleVel * dt;
		this.age += dt;
	}

	addForce() {
		
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
