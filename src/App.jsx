import { useState, useRef } from "react";
import PropTypes from "prop-types";

/*
Todos:
! em ordem de prioridade
resolver o bug que ocasiona na formatação erronea quando existem dois deste componente na root
Crie um quarto input que adiciiona uma descrição abaixo dos itens
*/

function GetInformation({ Information, Data1, Data2, Data3, appendItems }) {
	const [UserData1, setUserData1] = useState("");
	const [UserData2, setUserData2] = useState("");
	const [UserData3, setUserData3] = useState("");

	const data1Ref = useRef(null);
	const data2Ref = useRef(null);
	const data3Ref = useRef(null);
	const TextRef = useRef(null);

	function SetInformation() {
		setUserData1(data1Ref.current.value);
		setUserData2(data2Ref.current.value);
		setUserData3(data3Ref.current.value);
		if (appendItems) {
			TextRef.current.innerHTML += `<div class ="flex justify-between"> <p>${UserData2}</p> <p>${UserData3}</p> </div>`;
		} else {
			TextRef.current.innerHTML = `${UserData2}/${UserData3}`;
		}
	}

	return (
		<>
			<div className="flex" style={{ fontFamily: "Arial, sans-serif" }}>
				<div className="ml-8 flex w-3/12 items-center text-center mt-8 flex-col gap-4">
					<h3>{Information}</h3>
					<p>{Data1}</p>
					<input
						className="rounded-lg outline-none p-1 bg-slate-200"
						type="input"
						ref={data1Ref}
						placeholder={`Digite ${Data1}`}
					/>
					<p>{Data2}</p>
					<input
						className="rounded-lg outline-none p-1 bg-slate-200"
						type="input"
						ref={data2Ref}
						placeholder={`Digite ${Data2}`}
					/>
					<p>{Data3}</p>
					<input
						className="rounded-lg outline-none p-1 bg-slate-200"
						type="input"
						ref={data3Ref}
						placeholder={`Digite ${Data3}`}
					/>
					<button
						className="w-32 bg-sky-500/50 hover:bg-cyan-600 rounded-2xl  p-2 "
						onClick={SetInformation}
					>
						Send
					</button>
				</div>
				<div className="h-24">
					<h1 className="text-5xl font-bold">{UserData1}</h1>
					<p ref={TextRef}></p>
				</div>
			</div>
		</>
	);
}

GetInformation.propTypes = {
	Information: PropTypes.string.isRequired,
	Data1: PropTypes.string.isRequired,
	Data2: PropTypes.string.isRequired,
	Data3: PropTypes.string.isRequired,
	appendItems: PropTypes.bool,
};

GetInformation.defaultProps = {
	appendItems: false,
};

export default GetInformation;
