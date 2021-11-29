import React from "react";

// Icons
import Github from "../../Assets/github.png";

const Footer = React.memo(() => {
	return (
		<div className="relative bottom-0 left-0 w-full bg-gray-100 py-6">
			<div className="flex items-center justify-center">
				<div className="mr-4">
					<img
						className="min-w-min"
						src={Github}
						width="25"
						alt="githubdark"
					/>
				</div>
				<p className="text-xs text-gray-500">© 2021 GitHub, Inc.</p>
			</div>
		</div>
	);
});

export default Footer;
