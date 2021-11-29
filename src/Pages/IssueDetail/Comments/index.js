import React, {useState, useEffect} from "react";
import {useGetComments} from "../../../Hooks/useGetComments";
import CommentItem from "./CommentItem";

const Comments = ({commentsUrl, user}) => {
	const {comments} = useGetComments(commentsUrl);

	return (
		<div className="flex flex-col text-white">
			{comments?.map((comment, i) => (
				<CommentItem comment={comment} user={user} key={i} />
			))}
		</div>
	);
};

export default Comments;
