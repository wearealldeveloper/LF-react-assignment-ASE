import React from "react";

// Package
import {useNavigate} from "react-router-dom";

// Icons
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";

// Utils
import {toTimestamp} from "../../../Utils/toTimestamp";

const IssueItem = React.memo(({item}) => {
	// Initilization
	const navigate = useNavigate();

	const issueSelect = () => {
		// console.log("Selected issue", item);
		navigate(`/issuedetail/${item?.number}`);
	};

	return (
		<div
			className="p-3 cursor-pointer hover:bg-gray-700 transition duration-500 ease-in-out"
			style={{borderBottom: "1px solid #5c5c5c"}}
		>
			<div className="flex items-start justify-between">
				<div className="flex items-start">
					<PlayCircleOutlinedIcon
						style={{
							marginTop: "4px",
							fontSize: "16px",
							color: "white",
							marginRight: "0.75rem",
						}}
					/>
					<div>
						<p className="font-semibold text-sm text-white mb-1">
							<span
								className="hover:text-blue-500"
								onClick={issueSelect}
							>
								{item.title}
							</span>
							{item?.labels?.map((label, j) => (
								<span
									key={j}
									className="mx-1 px-2 rounded-xl font-normal"
									style={{
										backgroundColor: "#" + label.color,
										color: "black",
										fontSize: "12px",
										display: "inline-block",
										lineHeight: "1rem",
									}}
								>
									{label?.name}
								</span>
							))}
						</p>
						<p className="font-thin text-xs text-gray-50">
							{"#" + item?.number}{" "}
							{"opened " + toTimestamp(item?.created_at)}
							{" by " + item?.user?.login}
						</p>
					</div>
				</div>
				{item?.comments > 0 ? (
					<div className="flex items-center">
						<ChatBubbleOutlineOutlinedIcon
							style={{
								fontSize: "16px",
								color: "white",
								marginRight: "0.25rem",
							}}
						/>
						<p className="font-medium text-xs text-white mb-1">
							{item?.comments}
						</p>
					</div>
				) : null}
			</div>
		</div>
	);
});

export default IssueItem;
