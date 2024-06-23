import { useState, useRef } from "react";
import { AddItem } from "./AddItem";

function GetInformation() {
	const [information, setInformation] = useState("Basic information");
	const [data1, setData1] = useState("Name");
	const [data2, setData2] = useState("Linkedin");
	const [data3, setData3] = useState("E-mail");
	const [items, setItems] = useState([]);

	const data1Ref = useRef(null);
	const data2Ref = useRef(null);
	const data3Ref = useRef(null);

	function DisplayData() {
		let newItem = null;
		newItem = {
			ProcessedData1: data1Ref.current.value,
			ProcessedData2: data2Ref.current.value,
			ProcessedData3: data3Ref.current.value,
			Mode: information,
		};
		if (newItem) {
			setItems([...items, newItem]);
		}
	}

	function handleButtonClick(value) {
		switch (value) {
			case "Education":
				setInformation("Education");
				setData1("School");
				setData2("Major");
				setData3("Date");

				break;
			case "Skills":
				setInformation("Skills");
				setData1("a major skill");
				setData2("a major skill");
				setData3("a major skill");

				break;
			case "Certificates":
				setInformation("Certificates");
				setData1("a certificate");
				setData2("a certificate");
				setData3("a certificate");

				break;
			default:
				setInformation("Basic information");
				setData1("Name");
				setData2("Linkedin");
				setData3("E-mail");

				break;
		}
	}

	return (
		<div className="flex">
			<div className="ml-8 mb-4 flex w-3/12 items-center text-center mt-8 flex-col gap-4">
				<h3 className="text-3xl m-0">{information}</h3>
				<p>{data1}</p>
				<input
					className="rounded-lg outline-none p-1 bg-slate-200"
					type="input"
					required
					ref={data1Ref}
					placeholder={`type ${data1}`}
				/>
				<p>{data2}</p>
				<input
					className="rounded-lg outline-none p-1 bg-slate-200"
					type="input"
					required
					ref={data2Ref}
					placeholder={`type ${data2}`}
				/>
				<p>{data3}</p>
				<input
					className="rounded-lg outline-none p-1 bg-slate-200"
					type="input"
					required
					ref={data3Ref}
					placeholder={`type ${data3}`}
				/>
				<div className="flex gap-2 flex-wrap justify-items-center">
					<button
						className=" size-20 bg-sky-500/50 hover:bg-cyan-600 rounded-2xl p-2"
						onClick={() => handleButtonClick("Education")}
					>
						<img
							src="src/assets/education-learning-19-svgrepo-com.svg"
							alt="Education Button"
						/>
					</button>
					<button
						className="size-20 bg-sky-500/50 hover:bg-cyan-600 rounded-2xl p-2"
						onClick={() => handleButtonClick("Certificates")}
					>
						<img
							src="src/assets/education-learning-24-svgrepo-com.svg"
							alt="Certification button"
						/>
					</button>
					<button
						className="size-20 bg-sky-500/50 hover:bg-cyan-600 rounded-2xl p-2"
						onClick={() => handleButtonClick("Skills")}
					>
						<img src="src/assets/skills-svgrepo-com.svg" alt="Skills button" />
					</button>
					<button
						className="size-20 bg-sky-500/50 hover:bg-cyan-600 rounded-2xl p-2"
						onClick={() => handleButtonClick("")}
					>
						<img
							src="src/assets/user-svgrepo-com.svg"
							alt="Basic information button"
						/>
					</button>
					<button
						className="w-40 h-20 ml-24 flex text-center bg-sky-500/50 hover:bg-cyan-600 rounded-2xl p-2"
						onClick={DisplayData}
					>
						<img
							src="src/assets/plus-large-svgrepo-com.svg"
							alt="Add to cv button"
						/>
						<p className="mt-5">Add to cv </p>
					</button>
				</div>
			</div>
			<div>
				{items.map((item, index) => (
					<AddItem
						key={index}
						ProcessedData1={item.ProcessedData1}
						ProcessedData2={item.ProcessedData2}
						ProcessedData3={item.ProcessedData3}
						Mode={item.Mode}
					/>
				))}
			</div>
		</div>
	);
}

export default GetInformation;
