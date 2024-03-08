import { Vec2D } from "@/app/types";


export default class Entity {
	private age: number = 0;
	private pos: Vec2D;
	private vel: Vec2D;
	private angle: number = 0;
	private angleVel: number = 1;
	private lifeSpan: number = 10;
	private sprite: HTMLImageElement;
	private size: number;

	static sprites: HTMLImageElement[] = [];

	constructor(data: {
		pos: Vec2D;
		vel: Vec2D;
		lifeSpan?: number;
		size: number;
	}) {
		this.lifeSpan = data.lifeSpan || 10;
		this.pos = data.pos;
		this.vel = data.vel;
		this.sprite =
			Entity.sprites[Math.floor(Math.random() * Entity.sprites.length)];
		this.size = data.size;
	}

	isDead() {
		return this.age >= this.lifeSpan;
	}

	update(dt: number) {
		this.pos.x += this.vel.x * dt;
		this.pos.y += this.vel.y * dt;

		this.angle += this.angleVel * dt;
		this.age += dt;
	}

	draw(ctx: CanvasRenderingContext2D) {
		//ctx.fillRect(this.pos.x, this.pos.y, 20, 20);
		ctx.drawImage(this.sprite, this.pos.x, this.pos.y, this.size, this.size);

		ctx.beginPath()
		ctx.save();
			ctx.strokeStyle = "red";

			ctx.translate(this.pos.x, this.pos.y);
			ctx.stroke();
			ctx.moveTo(0, 0);
			ctx.lineTo(this.vel.x, this.vel.y);
			ctx.stroke();

		ctx.restore();
		ctx.closePath()
	}
}