import React from "react";

// Icons
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Reactions = ({
	like,
	dislike,
	laugh,
	hooray,
	confused,
	heart,
	rocket,
	eyes,
}) => {
	return (
		<div className="flex items-center mt-4 text-white">
			{like > 0 ? (
				<div
					className="flex items-center p-px px-1 bg-gray-700 rounded-xl"
					style={{border: "1px solid #5c5c5c", marginRight: "6px"}}
				>
					<p className="mr-1">{like}</p>
					<ThumbUpAltOutlinedIcon style={{fontSize: "16px"}} />
				</div>
			) : null}
			{dislike > 0 ? (
				<div
					className="flex items-center p-px px-1 bg-gray-700 rounded-xl"
					style={{border: "1px solid #5c5c5c", marginRight: "6px"}}
				>
					<p className="mr-1">{dislike}</p>

					<ThumbDownOffAltIcon style={{fontSize: "16px"}} />
				</div>
			) : null}
			{laugh > 0 ? (
				<div
					className="flex items-center p-px px-1 bg-gray-700 rounded-xl"
					style={{border: "1px solid #5c5c5c", marginRight: "6px"}}
				>
					<p className="mr-1">{laugh}</p>

					<SentimentVerySatisfiedOutlinedIcon style={{fontSize: "16px"}} />
				</div>
			) : null}
			{hooray > 0 ? (
				<div
					className="flex items-center p-px px-1 bg-gray-700 rounded-xl"
					style={{border: "1px solid #5c5c5c", marginRight: "6px"}}
				>
					<p className="mr-1">{hooray}</p>

					<SentimentSatisfiedAltOutlinedIcon style={{fontSize: "16px"}} />
				</div>
			) : null}
			{confused > 0 ? (
				<div className="flex items-center p-px px-1 bg-gray-700 rounded-xl">
					<p className="mr-1">{confused}</p>

					<SentimentVeryDissatisfiedOutlinedIcon
						style={{fontSize: "16px"}}
					/>
				</div>
			) : null}
			{heart > 0 ? (
				<div style={{border: "1px solid #5c5c5c", marginRight: "6px"}}>
					<p className="mr-1">{heart}</p>

					<FavoriteBorderOutlinedIcon style={{fontSize: "16px"}} />
				</div>
			) : null}
			{rocket > 0 ? (
				<div
					className="flex items-center p-px px-1 bg-gray-700 rounded-xl"
					style={{border: "1px solid #5c5c5c", marginRight: "6px"}}
				>
					<p className="mr-1">{rocket}</p>

					<RocketLaunchOutlinedIcon style={{fontSize: "16px"}} />
				</div>
			) : null}
			{eyes > 0 ? (
				<div
					className="flex items-center p-px px-1 bg-gray-700 rounded-xl"
					style={{border: "1px solid #5c5c5c", marginRight: "6px"}}
				>
					<p className="mr-1">{eyes}</p>
					<VisibilityOutlinedIcon style={{fontSize: "16px"}} />
				</div>
			) : null}
		</div>
	);
};

export default Reactions;
