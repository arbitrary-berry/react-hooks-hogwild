import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter"
import HogList from "./HogList"

import hogs from "../porkers_data";


function App() {
	const [hogList, setHogList] = useState(hogs)
	const [isShowGreased, setIsShowGreased] = useState(false)
	const [sortBy, setSortBy] = useState("name")

	const hogsToDisplay = [...hogList]//a copy of hoglist
		.filter(hog => isShowGreased ? hog.greased : true)//ternary only because it's a boolean, so only if there are two choices ie- greased pigs vs everyone
		.sort((hog1, hog2) =>{
			if (sortBy === "name") {
				return hog1.name.localeCompare(hog2.name)
			} else {
				return hog1.weight - hog2.weight
			}
	})

	return (
		<div className="App">
			<Nav />
			<Filter 
				isShowGreased={isShowGreased}
				onCheckGreased={setIsShowGreased}
				sortBy={sortBy}
				onChangeSortBy={setSortBy}
			/>
			<HogList hogs={hogsToDisplay}/>
		</div>
	);
}

export default App;
