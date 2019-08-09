import React from "react";

class SearchBar extends React.Component {
	render() {
		return (
			<div className='ui segment center aligned'>
				<div className='ui icon header'>
					<i className='search icon' />
					Search images
				</div>
				<div className='ui form'>
					<div className='field'>
						<div className='ui input'>
							<input type='text' placeholder='Search...' />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;
