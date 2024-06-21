import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import GetInformation from "./Creator";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GetInformation
			Information="Basic information"
			Data1="Name"
			Data2="Email"
			Data3="linkedin"
		/>
	</React.StrictMode>
);
