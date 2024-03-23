"use client";

import { IconSchool } from '@tabler/icons-react';
import Timeline from "rsuite/Timeline";
import './style.css'
import EducationData from '@/app/data/EducationData';

export default function EducationTimeline() {
	return (
		<div className="w-full text-white">
			<Timeline>
				{EducationData.map((data, i) => {
					return <Timeline.Item key={i} time={`${data.from} - ${data.to}`}>
						<h1>{data.institution}</h1>
						<h2>{data.course}</h2>
					</Timeline.Item>;
				})}
			</Timeline>
		</div>
	);
}