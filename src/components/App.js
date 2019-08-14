import React from "react";
import { Helmet } from "react-helmet";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Message from "./Message";
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
			<div className='App'>
				<div className='ui container' style={{ marginTop: "10px" }}>
					<Message
						title='App under construction!'
						body='Please take in mind that this application is at an early stage of
				development.'
					/>
					<Helmet bodyAttributes={{ style: "background-color : #263238" }} />
					<SearchBar onSubmit={this.onSearchSubmit} />
					<ImageList images={this.state.images} />
				</div>
			</div>
		);
	}
}

export default App;
