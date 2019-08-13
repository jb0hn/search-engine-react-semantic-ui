import React from "react";
import Helmet from "react-helmet";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
	onSearchSubmit(term) {
		console.log(term);
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
