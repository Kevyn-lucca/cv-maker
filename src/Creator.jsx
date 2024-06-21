import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { AddItem } from "./AddItem";

function GetInformation({ Information, Data1, Data2, Data3 }) {
	const [UserData1, setUserData1] = useState("");
	const [UserData2, setUserData2] = useState("");
	const [UserData3, setUserData3] = useState("");
	const [BtnValue, setBtnValue] = useState("");

	const data1Ref = useRef(null);
	const data2Ref = useRef(null);
	const data3Ref = useRef(null);

	function SetInformation() {
		setUserData1(data1Ref.current.value);
		setUserData2(data2Ref.current.value);
		setUserData3(data3Ref.current.value);
	}

	function handleButtonClick(value) {
		setBtnValue(value);
	}

	return (
		<div className="flex">
			<div className="ml-8 mb-4 flex w-3/12 items-center text-center mt-8 flex-col gap-4">
				<h3 className="text-3xl m-0">{Information}</h3>
				<p>{Data1}</p>
				<input
					className="rounded-lg outline-none p-1 bg-slate-200"
					type="input"
					required
					ref={data1Ref}
					placeholder={`type ${Data1}`}
				/>
				<p>{Data2}</p>
				<input
					className="rounded-lg outline-none p-1 bg-slate-200"
					type="input"
					required
					ref={data2Ref}
					placeholder={`type ${Data2}`}
				/>
				<p>{Data3}</p>
				<input
					className="rounded-lg outline-none p-1 bg-slate-200"
					type="input"
					required
					ref={data3Ref}
					placeholder={`type ${Data3}`}
				/>
				<button
					className="w-32 bg-sky-500/50 hover:bg-cyan-600 rounded-2xl p-2"
					onClick={SetInformation}
				>
					Send
				</button>
				<button onClick={() => handleButtonClick("Education")}>
					Add Education
				</button>
				<button onClick={() => handleButtonClick("Certificates")}>
					Add Certificates
				</button>
				<button onClick={() => handleButtonClick("Skills")}>Add Skills</button>
			</div>
			<AddItem
				ProcessedData1={UserData1}
				ProcessedData2={UserData2}
				ProcessedData3={UserData3}
				Mode={BtnValue}
			/>
		</div>
	);
}

GetInformation.propTypes = {
	Information: PropTypes.string.isRequired,
	Data1: PropTypes.string.isRequired,
	Data2: PropTypes.string.isRequired,
	Data3: PropTypes.string.isRequired,
};

export default GetInformation;
