import React from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
	onSearchSubmit(term) {
		axios.get("https://api.unsplash.com/search/photos", {
			params: {
				query: term
			},
			headers: {
				Authorization:
					"Client-ID e62006d4251dd7354db1d650496c1460c1e7ff331a44ed7993f32ac757a1331f"
			}
		});
	}

	render() {
		return (
			<div className='ui container' style={{ marginTop: "10px" }}>
				<Helmet bodyAttributes={{ style: "background-color : #fff" }} />
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList />
			</div>
		);
	}
}

export default App;
