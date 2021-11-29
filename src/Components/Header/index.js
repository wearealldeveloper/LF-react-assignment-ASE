import React from "react";

// Icons
import GithubDark from "../../Assets/githubdark.png";

// Values
import {headerTitle} from "../../Assets/headerTitle";

const Header = React.memo(() => {
	return (
		<header className="bg-black flex items-center justify-between px-4  md:px-20 py-3">
			{/* Left */}
			<div className="flex items-center ">
				<div className="mr-4">
					<img
						className="min-w-min"
						src={GithubDark}
						width="32"
						alt="githubdark"
					/>
				</div>
				<div className="flex items-center">
					{headerTitle.map((item, i) => (
						<p
							key={i}
							className="cursor-pointer text-sm md:font-normal text-white mr-4"
						>
							{item}
						</p>
					))}
				</div>
			</div>
			{/* Right */}
			<div className="flex items-center ">
				<div
					className="flex items-center justify-between rounded py-1 px-2 w-20 md:w-40 mr-3"
					style={{
						border: "1px solid #5c5c5c",
						borderRadius: "4px",
					}}
				>
					<div className="text-sm  font-normal text-white mr-4">
						Search
					</div>
				</div>
				<p className="text-xs md:font-normal text-white mr-4">Sign in</p>
				<div>
					<p className="text-xs md:font-normal text-white mr-4">Sign up</p>
				</div>
			</div>
		</header>
	);
});

export default Header;
