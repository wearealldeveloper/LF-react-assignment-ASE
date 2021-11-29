import React from "react";

// Package
import {useParams} from "react-router-dom";

// Icons
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";

// Hook
import {useGetIssueDetail} from "../../Hooks/useGetIssueDetail";
import {toTimestamp} from "../../Utils/toTimestamp";
import Comments from "./Comments";
import Reactions from "../../Components/Reactions";
import RightComponent from "./RightComponent";
import Signup from "./Signup";

const IssueDetail = () => {
	// Params
	const {issuenumber} = useParams();

	const {issueDetail} = useGetIssueDetail(issuenumber);

	return (
		<div className="flex flex-col px-4 bg-gray-900 pt-10 pb-10">
			<div className={` ${issueDetail === null ? "h-96" : ""}`}>
				{/* Title */}
				<div className="flex items-center justify-between pb-4 border-b border-gray-500">
					<div>
						{issueDetail?.title && (
							<p className=" text-white text-3xl">
								{issueDetail?.title}{" "}
								<span className="font-thin text-gray-100">
									{"#" + issuenumber}
								</span>
							</p>
						)}
						<div className="flex items-center mt-2">
							<div className="flex items-center  w-20 bg-green-500 rounded-2xl px-2 py-1">
								<PlayCircleOutlinedIcon style={{fontSize: "16px"}} />
								<p
									className="ml-1"
									style={{
										textTransform: "capitalize",
									}}
								>
									{issueDetail?.state}
								</p>
							</div>
							<div className="flex items-center text-sm text-white ml-2">
								{issueDetail?.user?.login && (
									<p className="mr-2">{issueDetail?.user?.login}</p>
								)}
								{issueDetail?.created_at && (
									<p>
										{"opened this issue " +
											toTimestamp(issueDetail?.created_at)}
									</p>
								)}
								{issueDetail?.comments ? (
									<p className=" text-gray-100 font-md ml-2">
										{", " + issueDetail?.comments + " comments"}
									</p>
								) : (
									<p>loading</p>
								)}
							</div>
						</div>
					</div>

					<div
						className="text-center px-2 py-1 bg-green-500 rounded-md w-40"
						style={{display: "inline-block"}}
					>
						New issue
					</div>
				</div>

				{/* Body */}
				<div className="flex  mt-6">
					<div className="w-3/4 mr-4">
						{/* body */}
						<div className="flex mb-4">
							{/* Profile Pic */}
							<div className="mr-3">
								<img
									src={issueDetail?.user?.avatar_url}
									width="35"
									alt={issueDetail?.user?.login}
									className="rounded-full"
								/>
							</div>
							{/* Right Container */}
							<div className="w-full  ">
								{/* Header */}
								<div
									className="flex items-center justify-between text-white bg-gray-800 p-2"
									style={{
										borderLeft: "1px solid #5c5c5c",
										borderRight: "1px solid #5c5c5c",
										borderTopLeftRadius: "6px",
										borderTopRightRadius: "6px",
										borderTop: "1px solid #5c5c5c",
									}}
								>
									<p>
										{issueDetail?.user?.login}
										{issueDetail?.created_at && (
											<span className="ml-2 font-light text-sm text-gray-100">
												{"commented " +
													toTimestamp(issueDetail?.created_at)}
											</span>
										)}
									</p>
								</div>
								{/* body */}
								<div
									className="text-white p-3 text-sm font-light"
									style={{
										border: "1px solid #5c5c5c",
										lineHeight: "1.5rem",
									}}
								>
									<p>{issueDetail?.body}</p>
									{/* Reactions */}
									<Reactions
										like={issueDetail?.reactions?.["+1"]}
										dislike={issueDetail?.reactions?.["-1"]}
										laugh={issueDetail?.reactions?.["laugh"]}
										hooray={issueDetail?.reactions?.["hooray"]}
										confused={issueDetail?.reactions?.["confused"]}
										heart={issueDetail?.reactions?.["heart"]}
										rocket={issueDetail?.reactions?.["rocket"]}
										eyes={issueDetail?.reactions?.["eyes"]}
									/>
								</div>
							</div>
						</div>

						{/* Comments */}
						<Comments
							commentsUrl={issueDetail?.comments_url}
							user={issueDetail?.user?.login}
						/>

						{/* Sign up component */}
						<Signup />
					</div>

					{/* Right Component */}
					<RightComponent issueDetail={issueDetail} />
				</div>
			</div>
		</div>
	);
};

export default IssueDetail;
