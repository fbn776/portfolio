import "./style.css";

interface TimelineData {
	key: string;
} 

interface Prop<E extends TimelineData>{
	align?: 'left' | 'right',
	source: E[],
	elmMapper: (data: E, i: number) => JSX.Element;
}

export default function Timeline<E extends TimelineData>(props: Prop<E>)  {
	return (
		<div className="timeline" data-align={props.align ?? "left"}>
			{props.source.map((data, i) => {
				return (
					<div key={i} className="container" data-title={data.key}>
						<div className="content">{props.elmMapper(data, i)}</div>
					</div>
				);
			})}
		</div>
	);
}