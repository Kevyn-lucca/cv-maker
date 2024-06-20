import React from "react";
import ReactDOM from "react-dom/client";
import GetInformation from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GetInformation
			Information="Passe seu Pudim"
			Data1="Pudim1"
			Data2="Pudim2"
			Data3="Pudim3"
		/>
	</React.StrictMode>
);
