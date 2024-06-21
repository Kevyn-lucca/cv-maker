import { useState, useRef } from "react";
import PropTypes from "prop-types";

/*
Todos:
! em ordem de prioridade
refatorar o codigo para torna-lo mais reutilizavel (remover ,name, email e number por valores mais genericos)
resolver o bug que ocasiona na formatação erronea quando existem dois deste componente na root
criar um valor boolean que quando ativado faça que itens seja adicionados a div na linha 63 ao inves de substituilos
criar uma função que retornar estilos diferentes
criar mudança de fonte do curriculo
*/

function GetInformation({ Information, Data1, Data2, Data3 }) {
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Number, setNumber] = useState("");

	const data1Ref = useRef(null);
	const data2Ref = useRef(null);
	const data3Ref = useRef(null);
	const TextRef = useRef(null);

	function SetInformation() {
		setName(data1Ref.current.value);
		setEmail(data2Ref.current.value);
		setNumber(data3Ref.current.value);
		TextRef.current.innerHTML = `${Email}/${Number}`;
	}
	return (
		<>
			<div className="flex">
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
					<h1 className="text-5xl font-bold">{Name}</h1>
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
};

export default GetInformation;
