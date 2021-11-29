import React, {useRef} from "react";

// Icons
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";

const Pagination = React.memo(
	({currentPage, lastPage, selectPage, prevPage, nextPage}) => {
		const ref = useRef(null);

		const pageNumbers = [];

		for (let i = 1; i <= lastPage; i++) {
			pageNumbers.push(i);
		}

		const scroll = (scrollOffset) => {
			ref.current.scrollLeft += scrollOffset;
		};

		return (
			<div className="w-full flex px-2 md:px-40 mt-8">
				<div
					className="flex items-center px-3 bg-gray-200 rounded text-sm cursor-pointer"
					onClick={() => prevPage(currentPage)}
				>
					Prev
				</div>
				<div
					className="flex items-center px-3 bg-gray-200 ml-1 rounded cursor-pointer"
					onClick={() => scroll(-25)}
				>
					<KeyboardDoubleArrowLeftRoundedIcon style={{fontSize: "1rem"}} />
				</div>
				<div className="w-auto  mx-1 flex overflow-x-auto" ref={ref}>
					{pageNumbers.map((page, i) => (
						<div
							key={i}
							className={`cursor-pointer ${
								currentPage === page
									? "bg-blue-500 text-white"
									: "text-white"
							} px-3 md:px-4 py-1 min-w-32px flex justify-center items-center rounded`}
							onClick={() => selectPage(page)}
						>
							{page}
						</div>
					))}
				</div>
				<div
					className="flex items-center px-3 bg-gray-200 mr-1 rounded cursor-pointer"
					onClick={() => scroll(25)}
				>
					<KeyboardDoubleArrowRightRoundedIcon
						style={{fontSize: "1rem"}}
					/>
				</div>
				<div
					className="flex items-center px-3 bg-gray-200 rounded text-sm cursor-pointer"
					onClick={() => nextPage(currentPage)}
				>
					Next
				</div>
			</div>
		);
	}
);

export default Pagination;
