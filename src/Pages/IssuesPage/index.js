import React, {useState, useEffect} from "react";

// Package
import * as timeago from "timeago.js";

// Icons
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";

// Hooks
import {useGetIssues} from "../../Hooks/useGetIssues";

// Components
import Pagination from "../../Components/Pagination";
import IssueItem from "./IssueItem";

const IssuesPage = React.memo(() => {
	// Hooks
	const [currentPage, setCurrentPage] = useState(1);

	const {issues, lastPage} = useGetIssues(currentPage);

	// Functions
	const selectPage = (page) => {
		console.log("selected page", page);
		setCurrentPage(page);
	};
	const prevPage = (currentPage) => {
		console.log("prev page", currentPage);
		setCurrentPage(currentPage - 1);
	};
	const nextPage = (currentPage) => {
		console.log("next page", currentPage);
		setCurrentPage(currentPage + 1);
	};

	return (
		<div className="px-4 md:px-20 h-full bg-gray-900 pt-12 pb-10">
			<div
				style={{
					// border: "1px solid #5c5c5c",
					// borderRadius: "6px",
					borderLeft: "1px solid #5c5c5c",
					borderRight: "1px solid #5c5c5c",
					borderTopLeftRadius: "6px",
					borderTopRightRadius: "6px",
					borderBottomLeftRadius: "6px",
					borderBottomRightRadius: "6px",
					borderTop: "1px solid #5c5c5c",
				}}
			>
				<header
					className="p-4 bg-gray-800 "
					style={{
						borderTopLeftRadius: "6px",
						borderTopRightRadius: "6px",
						borderBottom: "1px solid #5c5c5c",
					}}
				>
					<div className="flex items-center  text-xs text-white ">
						<PlayCircleOutlinedIcon
							style={{fontSize: "16px", marginRight: "0.5rem"}}
						/>
						<p> Open</p>
					</div>
				</header>

				{/* Issues List */}

				<div className={`${issues === null ? "h-96" : ""}`}>
					{issues === null ? (
						<h3 className="text-center text-white mt-10">Loading</h3>
					) : null}
					{issues?.map((item, i) => (
						<IssueItem item={item} key={i} />
					))}
				</div>
			</div>

			{/* Pagination */}
			<Pagination
				currentPage={currentPage}
				lastPage={lastPage}
				selectPage={selectPage}
				prevPage={prevPage}
				nextPage={nextPage}
			/>
		</div>
	);
});

export default IssuesPage;
