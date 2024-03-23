"use client";

import EducationData from "@/app/data/EducationData";
import "./style.css";


export default function EducationTimeline() {
	return (
		<div className="timeline">
			{
				EducationData.map((data, i) => {
					return (
						<div key={i} className="container" data-title={data.title}>
							<div className="content">
								<h1 className="text-xl mb-2 font-semibold">
									{data.institution}
								</h1>
								<li> {data.course}</li>
								{data.description ? (
									<p className="text-pretty m-2 text-base font-light opacity-70">
										{data.description}
									</p>
								) : (
									""
								)}
								{data.marks ? (
									<li>
										{data.marks}
									</li>
								) : (
									""
								)}
							</div>
						</div>
					);
				})
			}
		</div>
	);
}
