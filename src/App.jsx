// Importando hooks e PropTypes do React
import { useState, useRef } from "react";
import PropTypes from "prop-types";

/*
Todos:
  ! Em ordem de inportancia
  resolver problema de formatação quando há mais de um componente desse na pagina
  Adicionar funcionalidado que adiciona esse componente ao dom quando ele e chamado
  adicionar botão que remove os valores previamentes adicionados
  criar uma maneira de baixar o curriculo criado em dockx e pdf  (biblioteca file saver entenda ela melhor)
*/

// Definição do componente funcional GetInformation com props de entrada
function GetInformation({ Information, Data1, Data2, Data3, appendItems }) {
	// Estados para armazenar os dados dos inputs
	const [UserData1, setUserData1] = useState(""); // Estado para Data1
	const [UserData2, setUserData2] = useState(""); // Estado para Data2
	const [UserData3, setUserData3] = useState(""); // Estado para Data3

	// Refs para acessar diretamente os elementos input no DOM
	const data1Ref = useRef(null); // Ref para input de Data1
	const data2Ref = useRef(null); // Ref para input de Data2
	const data3Ref = useRef(null); // Ref para input de Data3
	const TextRef = useRef(null); // Ref para o parágrafo onde o conteúdo será exibido

	// Função chamada ao clicar no botão "Send" para atualizar os estados e o conteúdo exibido
	function SetInformation() {
		// Atualiza os estados com os valores dos inputs referenciados
		setUserData1(data1Ref.current.value);
		setUserData2(data2Ref.current.value);
		setUserData3(data3Ref.current.value);

		// Verifica se deve adicionar novos itens ou substituir o conteúdo existente em TextRef
		if (appendItems) {
			// Se appendItems for verdadeiro, adiciona um novo elemento div com UserData2 e UserData3
			TextRef.current.innerHTML += `<div class="flex justify-between"> <p>${UserData2}</p> <p>${UserData3}</p> </div>`;
		} else {
			// Caso contrário, substitui o conteúdo de TextRef com UserData2 e UserData3 separados por "/"
			TextRef.current.innerHTML = `${UserData2}/${UserData3}`;
		}
	}

	// Retorno JSX do componente
	return (
		<>
			{/* Estrutura principal do componente */}
			<div className="flex" style={{ fontFamily: "Arial, sans-serif" }}>
				{/* Lado esquerdo: Formulário de inputs e botão */}
				<div className="ml-8 mb-4 flex w-3/12 items-center text-center mt-8 flex-col gap-4">
					<h3 className="text-3xl m-0">{Information}</h3>{" "}
					{/* Título principal */}
					<p>{Data1}</p> {/* Label para Data1 */}
					<input
						className="rounded-lg outline-none p-1 bg-slate-200"
						type="input"
						ref={data1Ref} // Referência ao input de Data1
						placeholder={`Digite ${Data1}`} // Placeholder dinâmico
					/>
					<p>{Data2}</p> {/* Label para Data2 */}
					<input
						className="rounded-lg outline-none p-1 bg-slate-200"
						type="input"
						ref={data2Ref} // Referência ao input de Data2
						placeholder={`Digite ${Data2}`} // Placeholder dinâmico
					/>
					<p>{Data3}</p> {/* Label para Data3 */}
					<input
						className="rounded-lg outline-none p-1 bg-slate-200"
						type="input"
						ref={data3Ref} // Referência ao input de Data3
						placeholder={`Digite ${Data3}`} // Placeholder dinâmico
					/>
					<button
						className="w-32 bg-sky-500/50 hover:bg-cyan-600 rounded-2xl p-2"
						onClick={SetInformation} // Função chamada ao clicar no botão
					>
						Send {/* Texto do botão */}
					</button>
				</div>

				{/* Lado direito: Exibição dos dados inseridos */}
				<div className="h-24">
					<h1 className="text-5xl font-bold">{UserData1}</h1>{" "}
					{/* Exibição de UserData1 */}
					<p ref={TextRef}></p>{" "}
					{/* Parágrafo onde o conteúdo dinâmico será exibido */}
				</div>
			</div>
		</>
	);
}

// Propriedades esperadas para o componente GetInformation
GetInformation.propTypes = {
	Information: PropTypes.string.isRequired, // String obrigatória para o título principal
	Data1: PropTypes.string.isRequired, // String obrigatória para o label de Data1
	Data2: PropTypes.string.isRequired, // String obrigatória para o label de Data2
	Data3: PropTypes.string.isRequired, // String obrigatória para o label de Data3
	appendItems: PropTypes.bool, // Booleano opcional para indicar se deve adicionar novos itens
};

// Valores padrão para as propriedades não obrigatórias
GetInformation.defaultProps = {
	appendItems: false, // Por padrão, não adiciona novos itens
};

export default GetInformation; // Exporta o componente GetInformation como padrão
