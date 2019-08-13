import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = e => {
		e.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div
				className='ui segment center aligned'
				style={{ backgroundColor: "#B0BEC5" }}>
				<div className='ui icon header'>Search images</div>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>
						<div className='ui input left icon'>
							<i className='search icon' />
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
