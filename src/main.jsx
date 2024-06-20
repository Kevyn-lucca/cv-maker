import React from "react";
import ReactDOM from "react-dom/client";
import GetInformation from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GetInformation
			Information="Basic information"
			Data1="Full name"
			Data2="Phone number"
			Data3="E-mail"
		/>
	</React.StrictMode>
);
