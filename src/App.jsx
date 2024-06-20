import { useState } from "react";
import PropTypes from "prop-types";

function GetInformation({ Information, Data1, Data2, Data3 }) {
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Number, setNumber] = useState("");

	function SetInformation() {
		setName(document.querySelector("#data1").value);
		setEmail(document.querySelector("#data2").value);
		setNumber(document.querySelector("#data3").value);
	}

	return (
		<>
			<div className=" ml-8 flex flex-col gap-4">
				<h3>{Information}</h3>
				<p>{Data1}</p>
				<input type="input" id="data1" placeholder={`Digite ${Data1}`} />
				<p>{Data2}</p>
				<input type="input" id="data2" placeholder={`Digite ${Data2}`} />
				<p>{Data3}</p>
				<input type="input" id="data3" placeholder={`Digite ${Data3}`} />
				<button
					className="w-32 bg-sky-500/50 hover:bg-cyan-600 rounded-2xl  p-2 "
					onClick={SetInformation}
				>
					Mandar {Information}
				</button>
			</div>
			<div>
				<h1>{Name}</h1>
				<h4>
					{Email} / {Number}
				</h4>
			</div>
		</>
	);
}

GetInformation.propTypes = {
	Information: PropTypes.string.isRequired,
	Data1: PropTypes.string.isRequired,
	Data2: PropTypes.string.isRequired,
	Data3: PropTypes.string.isRequired,
};

export default GetInformation;
