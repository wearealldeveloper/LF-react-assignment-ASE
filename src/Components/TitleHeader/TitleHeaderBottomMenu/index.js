import React from "react";
import {colors} from "../../../Assets/colors";

const TitleHeaderBottomMenu = React.memo(({title, icon}) => {
	return (
		<div
			className={`flex items-center cursor-pointer text-xs text-white hover:bg-gray-700  rounded-sm px-2 py-3 mr-2 transition duration-700 ease-in-out`}
			style={{
				borderBottom:
					title === "Issues"
						? "3px solid #e67710"
						: "3px solid transparent",
			}}
		>
			{icon}

			<p className="ml-1">
				{title}

				{/* {title === "Issues" ? (
					<span className="ml-1 rounded-lg bg-gray-500 px-2 py-px text-white">
						660
					</span>
				) : null} */}
			</p>
		</div>
	);
});

export default TitleHeaderBottomMenu;
