import {Title} from "@mui/icons-material";
import React from "react";

const TitleHeaderRightMenu = React.memo(({title, icon}) => {
	return (
		<div className="flex items-center cursor-pointer bg-gray-800 hover:bg-gray-700  text-xs text-white  rounded-sm px-2 py-1 mr-2 transition duration-500 ease-in-out">
			{icon}
			<p className="ml-1">{title}</p>
		</div>
	);
});

export default TitleHeaderRightMenu;
