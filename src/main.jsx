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
		<GetInformation
			Information="Education"
			Data1="School"
			Data2="Major"
			Data3="Potato school"
		/>
	</React.StrictMode>
);
