// Package
import {Routes, Route} from "react-router-dom";

// Components
import Header from "./Components/Header";
import TitleHeader from "./Components/TitleHeader";
import Footer from "./Components/Footer";

// Pages
import IssuesPage from "./Pages/IssuesPage";
import IssueDetail from "./Pages/IssueDetail";

function App() {
	return (
		<div className="flex flex-col overflow-auto overflow-x-hidden bg-gray-200">
			<Header />
			<TitleHeader />
			<Routes>
				<Route path="/" element={<IssuesPage />}></Route>
				<Route
					path="/issuedetail/:issuenumber"
					element={<IssueDetail />}
				></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
