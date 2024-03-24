import "./style.css";

interface TimelineData {
	title: string;
} 

interface Prop<E extends TimelineData>{
	source: E[],
	elmMapper: (data: E, i: number) => JSX.Element;
}

export default function Timeline<E extends TimelineData>(props: Prop<E>)  {
	return (
		<div className="timeline">
			{props.source.map((data, i) => {
				return (
					<div key={i} className="container" data-title={data.title}>
						<div className="content">
							{props.elmMapper(data, i)}
						</div>
					</div>
				);
			})}
		</div>
	);
}