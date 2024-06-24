import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

export function AddItem({
	ProcessedData1,
	ProcessedData2,
	ProcessedData3,
	ProcessedData4,
	Mode,
}) {
	const [content, setContent] = useState("");
	const [items] = useState([
		ProcessedData1,
		ProcessedData2,
		ProcessedData3,
		ProcessedData4,
	]);

	const updateContent = useCallback(() => {
		switch (Mode) {
			case "Education":
				setContent(
					<div>
						<h1 className="font-bold text-4xl underline">Education</h1>
						<h2>{items[0]}</h2>
						<div className="flex justify-between">
							<p>{items[1]}</p>
							<p>{items[2]}</p>
						</div>
						<h2 className="font-bold text-2xl underline">About</h2>
						<p>{items[3]}</p>
						<button onClick={deleteSection}>Delete Section</button>
					</div>
				);
				break;
			case "Skills":
				setContent(
					<div>
						<h1 className="font-bold text-2xl underline">Skills</h1>
						<ul className="list-disc">
							{items.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
						<button onClick={deleteSection}>Delete Section</button>
					</div>
				);
				break;
			case "Cerificates":
				setContent(
					<div>
						<h1 className="font-bold text-2xl underline">Certificates</h1>
						<ul className="list-disc">
							{items.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
						<button onClick={deleteSection}>Delete Section</button>
					</div>
				);
				break;
			default:
				setContent(
					<div>
						<h1 className="text-center font-bold text-4xl underline">
							{items[0]}
						</h1>
						<p className="text-lg">
							{items[1]}/ {items[2]}
						</p>
						<button onClick={deleteSection}>Delete Section</button>
					</div>
				);
		}
	}, [Mode, items]);

	useEffect(() => {
		updateContent();
	}, [updateContent]);

	const deleteSection = () => {
		setContent("");
	};

	return <div>{content}</div>;
}

AddItem.propTypes = {
	Mode: PropTypes.string.isRequired,
	ProcessedData1: PropTypes.string.isRequired,
	ProcessedData2: PropTypes.string.isRequired,
	ProcessedData3: PropTypes.string.isRequired,
	ProcessedData4: PropTypes.string.isRequired,
};
