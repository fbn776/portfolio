import fs from "fs";
import svg64 from "svg64";
import SkillsData from "./input";

for (let cat of SkillsData) {
	for (let skill of cat.skills) {
		const base64fromSVG = svg64(skill.svg as string);
		skill.svg = base64fromSVG;
	}
}

// Write the converted data to a file
const fileContent = JSON.stringify(SkillsData);

fs.writeFile("output.ts", fileContent, (err) => {
	if (err) {
		console.error("Error writing to file:", err);
	} else {
		console.log("Data written to file successfully.");
	}
});
