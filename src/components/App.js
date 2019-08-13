import React from "react";
import { Helmet } from "react-helmet";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends React.Component {
	state = {
		images: []
	};

	onSearchSubmit = async term => {
		const response = await unsplash.get("search/photos", {
			params: {
				query: term
			}
		});
		// console.log(this); debug: check if to what this property is assigned to

		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className='ui container' style={{ marginTop: "10px" }}>
				<Helmet bodyAttributes={{ style: "background-color : #263238" }} />
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
