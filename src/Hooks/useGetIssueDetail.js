import {useState, useEffect} from "react";

// Package
import {Octokit} from "@octokit/core";
import axios from "axios";

// Values
import {owner, repo} from "../Assets/values";

// Helpers

export const useGetIssueDetail = (issue_number) => {
	console.log("useGetIssueDetail", issue_number);

	// Hooks
	const [issueDetail, setIssueDetail] = useState(null);

	const octokit = new Octokit({
		auth: `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`,
	});

	useEffect(() => {
		getIssueDetail();
	}, [issue_number]);

	const getIssueDetail = async () => {
		// `GET /repos/{owner}/{repo}/issues/{issue_number}`
		// const response = await octokit.request(
		// 	`GET /repos/${owner}/${repo}/issues/${issue_number}`
		// );

		const response = await axios.get(
			`https://api.github.com/repos/${owner}/${repo}/issues/${issue_number}`
		);
		console.log(`Response of issue ${issue_number} `, response?.data);
		setIssueDetail(response?.data);
	};

	return {issueDetail};
};
