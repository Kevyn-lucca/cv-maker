import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function AddItem({
	ProcessedData1,
	ProcessedData2,
	ProcessedData3,
	Mode,
}) {
	const [content, setContent] = useState("");

	useEffect(() => {
		switch (Mode) {
			case "Education":
				setContent(
					<>
						<h1>Education</h1>
						<h2>{ProcessedData1}</h2>
						<div>
							<p>{ProcessedData2}</p>
							<p>{ProcessedData3}</p>
						</div>
					</>
				);
				break;
			case "Skills":
				setContent(
					<>
						<h1>Skills</h1>
						<ul>
							<li>{ProcessedData1}</li>
							<li>{ProcessedData2}</li>
							<li>{ProcessedData3}</li>
						</ul>
					</>
				);
				break;
			default:
				setContent("");
		}
	}, [Mode, ProcessedData1, ProcessedData2, ProcessedData3]);

	return <div>{content}</div>;
}
AddItem.propTypes = {
	Mode: PropTypes.string.isRequired,
	ProcessedData1: PropTypes.string.isRequired,
	ProcessedData2: PropTypes.string.isRequired,
	ProcessedData3: PropTypes.string.isRequired,
};
