import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	// Popular way of solving this === undefined error
	// constructor(props) {
	// 	super(props);
	// 	this.onFormSubmit = this.onFormSubmit.bind(this);
	// }

	// easier and shorter way — change normal function to arrow function
	// which automatically bind 'this'
	onFormSubmit = e => {
		e.preventDefault();

		console.log(this.state.term);
	};

	render() {
		return (
			<div className='ui segment center aligned'>
				<div className='ui icon header'>
					<i className='search icon' />
					Search images
				</div>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>
						<div className='ui input'>
							<input
								type='text'
								placeholder='Search...'
								value={this.state.term}
								onChange={e =>
									this.setState({
										term: e.target.value
									})
								}
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
