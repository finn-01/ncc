import React from "react";

import "./Sidebar.css";

const links = ["Home", "Services", "News", "Blog", "Contact"];

const Sidebar = () => {
	return (
		<div className="sidebar__container">
			{links.map((link, index) => (
				<a href={`#${link}`} key={index}>
					{link}
				</a>
			))}
		</div>
	);
};

export default Sidebar;
