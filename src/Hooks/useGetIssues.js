import {useState, useEffect} from "react";

// Package
import {Octokit} from "@octokit/core";
import axios from "axios";

// Values
import {owner, repo} from "../Assets/values";
import {parseLinkHeader} from "../Utils/parseLinkHeader";

// Helpers

export const useGetIssues = (currentPage) => {
	console.log("useGetIssues");
	const [issues, setIssues] = useState(null);
	const [lastPage, setLastPage] = useState(null);
	const [totalIssues, setTotalIssues] = useState(null);

	const octokit = new Octokit({
		auth: `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`,
	});

	useEffect(() => {
		getIssues();
	}, [currentPage]);

	const getIssues = async () => {
		// `GET /repos/${owner}/${repo}/issues`
		// `GET /repos/{owner}/{repo}/issues/comments`
		// `GET /repos/{owner}/{repo}/issues/comments/{comment_id}`
		// `GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`
		// `GET /repos/{owner}/{repo}/issues/events`
		// `GET /repos/{owner}/{repo}/issues/events/{event_id}`
		// `GET /repos/{owner}/{repo}/issues/{issue_number}`
		// `GET /repos/{owner}/{repo}/issues/{issue_number}/comments`
		// `GET /repos/{owner}/{repo}/issues/{issue_number}/events`
		// `GET /repos/{owner}/{repo}/issues/{issue_number}/labels`
		// `GET /repos/{owner}/{repo}/issues/{issue_number}/reactions`
		// `GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`
		// const response = await octokit.request(
		// 	`GET /repos/${owner}/${repo}/issues?page=${currentPage}`
		// );
		const response = await axios.get(
			`https://api.github.com/repos/facebook/react/issues?page=${currentPage}`
		);
		console.log("Response", response?.data);
		// console.log(response.headers.link);

		// Get Last Page
		const lastPageURL = parseLinkHeader(response.headers.link)?.last;

		console.log("lastPageurl", lastPageURL);
		if (lastPageURL != undefined) {
			const url = new URL(lastPageURL);
			let lastPage = url.searchParams.get("page");

			setLastPage(lastPage);
		}
		setIssues(response?.data);
	};

	return {issues, lastPage};
};
