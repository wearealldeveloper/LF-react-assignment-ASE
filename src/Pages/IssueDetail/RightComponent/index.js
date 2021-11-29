import React from "react";

const RightComponent = React.memo(({issueDetail}) => {
	return (
		<div className="w-1/4">
			<div className="text-xs border-b border-gray-200 pb-4">
				<p className="text-white font-normal mb-2">Assignees</p>
				{issueDetail?.assignees?.length === 0 ? (
					<p className="flex items-center text-gray-200 font-light">
						No one assigned
					</p>
				) : null}
				{issueDetail?.assignees?.map((item, j) => (
					<div
						key={j}
						className="flex items-center text-gray-200 font-light mr-2"
					>
						<div className="mr-1">
							<img
								src={item?.avatar_url}
								width="25"
								alt={item?.login}
								className="rounded-full"
							/>
						</div>
						<p>{item?.login}</p>
					</div>
				))}
			</div>
			<div className="text-xs border-b border-gray-200 py-4">
				<p className="text-white font-normal mb-2">Labels</p>
				{issueDetail?.labels?.map((label, j) => (
					<span
						key={j}
						className="mx-1 px-2 rounded-xl font-normal mb-2"
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
			</div>
			<div className="text-xs border-b border-gray-200 py-4">
				<p className="text-white font-normal mb-2">Projects</p>
				<p className="text-gray-200 font-light">None Yet</p>
			</div>
			<div className="text-xs border-b border-gray-200 py-4">
				<p className="text-white font-normal mb-2">Milestone</p>
				<p className="text-gray-200 font-light">None Yet</p>
			</div>
			<div className="text-xs border-b border-gray-200 py-4">
				<p className="text-white font-normal mb-2">Linked pull requests</p>
				<p className="text-gray-200 font-light">
					Successfully merging a pull request may close this issue. None
					yet
				</p>
			</div>
			<div className="text-xs border-b border-gray-200 py-4">
				<p className="text-white font-normal mb-2">Notifications</p>
				<p className="text-gray-200 font-light">
					You’re not receiving notifications from this thread.
				</p>
			</div>
		</div>
	);
});

export default RightComponent;
