import React from "react";

const Signup = () => {
	return (
		<div className="flex items-center mt-6 ml-10">
			<div className="px-3 py-2 text-white bg-green-500 rounded-md mr-2 hover:bg-green-700 cursor-pointer">
				Sign up for free
			</div>
			<p className="font-normal text-white">
				to join this conversation on Github Already have an account ?{" "}
				<span className="text-blue-500 cursor-pointer">
					Sign in to comment
				</span>
			</p>
		</div>
	);
};

export default Signup;
