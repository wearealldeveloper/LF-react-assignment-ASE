import {useState, useEffect} from "react";

// Package
import {Octokit} from "@octokit/core";
import axios from "axios";

// Values
import {owner, repo} from "../Assets/values";

// Helpers

export const useGetComments = (commentsUrl) => {
	console.log("useGetComments", commentsUrl);

	// Hooks
	const [comments, setComments] = useState(null);

	useEffect(() => {
		getComments();
	}, [commentsUrl]);

	const getComments = () => {
		axios
			.get(`${commentsUrl}`)
			.then((res) => {
				console.log("Response get comment", res.data);
				setComments(res?.data);
			})
			.catch((err) => {
				console.log("Error get comments", err);
			});
	};

	return {comments};
};
