import React from "react";

import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
	return (
		<>
			<div className="app__container">
				<div className="app__container-sidebar">
					<Sidebar />
				</div>

				<div className="app__container-wrapper">
					<Content />
					<Footer />
				</div>
			</div>
		</>
	);
};

export default App;
