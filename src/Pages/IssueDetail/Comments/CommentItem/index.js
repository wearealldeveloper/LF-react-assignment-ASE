import React from "react";

// Utils
import {toTimestamp} from "../../../../Utils/toTimestamp";

// Components
import Reactions from ".././../../../Components/Reactions";

const CommentItem = ({comment, user}) => {
	return (
		<div className="flex text-white  mb-4">
			{/* Profile Pic */}
			<div className="mr-3">
				<img
					src={comment?.user?.avatar_url}
					width="35"
					alt={comment?.user?.login}
					className="rounded-full"
				/>
			</div>
			{/* Right Container */}
			<div className="w-full  ">
				{/* Header */}
				<div
					className="flex items-center justify-between text-white bg-gray-800 p-3"
					style={{
						borderLeft: "1px solid #5c5c5c",
						borderRight: "1px solid #5c5c5c",
						borderBottom: "1px solid #5c5c5c",
						borderTopLeftRadius: "6px",
						borderTopRightRadius: "6px",
						borderTop: "1px solid #5c5c5c",
					}}
				>
					<p>
						{comment?.user?.login}
						{comment?.created_at && (
							<span className="ml-2 font-light text-sm text-gray-100">
								{"commented " + toTimestamp(comment?.created_at)}
							</span>
						)}
					</p>
					<div>
						<div
							className="px-1 py-1 rounded-md text-xs"
							style={{border: "1px solid #5c5c5c"}}
						>
							{comment?.author_association === "NONE" &&
							user === comment?.user?.login ? (
								<p>Author</p>
							) : null}
							{comment?.author_association !== "NONE" ? (
								<p> {comment?.author_association} </p>
							) : null}
						</div>
					</div>
				</div>
				{/* body */}
				<div
					className="text-white p-3 text-sm font-light"
					style={{
						border: "1px solid #5c5c5c",
						lineHeight: "1.5rem",
					}}
				>
					<p>{comment?.body}</p>
					{/* Reactions */}
					<Reactions
						like={comment?.reactions?.["+1"]}
						dislike={comment?.reactions?.["-1"]}
						laugh={comment?.reactions?.["laugh"]}
						hooray={comment?.reactions?.["hooray"]}
						confused={comment?.reactions?.["confused"]}
						heart={comment?.reactions?.["heart"]}
						rocket={comment?.reactions?.["rocket"]}
						eyes={comment?.reactions?.["eyes"]}
					/>
				</div>
			</div>
		</div>
	);
};

export default CommentItem;
