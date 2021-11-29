import React from "react";

// Icon
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AltRouteOutlinedIcon from "@mui/icons-material/AltRouteOutlined";
import TitleHeaderRightMenu from "./TitleHeaderRightMenu";

import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import AirlineStopsOutlinedIcon from "@mui/icons-material/AirlineStopsOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import TitleHeaderBottomMenu from "./TitleHeaderBottomMenu";

const menus = [
	{
		title: "Notification",
		icon: <NotificationsNoneOutlinedIcon style={{fontSize: "16px"}} />,
	},
	{
		title: "Star 178k",
		icon: <StarBorderOutlinedIcon style={{fontSize: "16px"}} />,
	},
	{
		title: "Fork 36k",
		icon: <AltRouteOutlinedIcon style={{fontSize: "16px"}} />,
	},
];

const bottomMenus = [
	{
		title: "Code",
		icon: <CodeOutlinedIcon style={{fontSize: "16px"}} />,
	},
	{
		title: "Issues",
		icon: <AdjustOutlinedIcon style={{fontSize: "16px"}} />,
	},
	{
		title: "Pull requests",
		icon: <AirlineStopsOutlinedIcon style={{fontSize: "16px"}} />,
	},
	{
		title: "Actions",
		icon: <PlayCircleOutlinedIcon style={{fontSize: "16px"}} />,
	},
	{
		title: "Projects",
		icon: <AnalyticsOutlinedIcon style={{fontSize: "16px"}} />,
	},
	{
		title: "Wiki",
		icon: <MenuBookOutlinedIcon style={{fontSize: "16px"}} />,
	},
	{
		title: "Security",
		icon: <PrivacyTipOutlinedIcon style={{fontSize: "16px"}} />,
	},
	{
		title: "Insights",
		icon: <ShowChartOutlinedIcon style={{fontSize: "16px"}} />,
	},
];

const TitleHeader = React.memo(() => {
	return (
		<div className=" bg-gray-900  pt-3">
			{/* Top */}
			<div className="flex items-center justify-between px-3">
				<div className="flex items-start mb-6">
					<p className="text-blue-500 font-medium mr-2">
						facebook <span className="text-gray-300">/</span> react
					</p>
					<p
						className="border border-white text-white rounded-md p-0.5 font-thin"
						style={{
							border: "1px solid #5c5c5c",
							borderRadius: "4px",
							fontSize: "10px",
						}}
					>
						Public
					</p>
				</div>
				<div className="flex items-center">
					{menus.map((menu, i) => (
						<TitleHeaderRightMenu
							key={i}
							title={menu.title}
							icon={menu.icon}
						/>
					))}
				</div>
			</div>

			{/* Bottom */}
			<div className="flex items-center border-b border-gray-800 px-3">
				{bottomMenus.map((menu, i) => (
					<TitleHeaderBottomMenu
						key={i}
						title={menu.title}
						icon={menu.icon}
					/>
				))}
			</div>
		</div>
	);
});

export default TitleHeader;
