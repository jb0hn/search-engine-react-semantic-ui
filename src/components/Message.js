import React from "react";

const Message = props => {
	return (
		<div className='ui info message'>
			{/* <i className='close icon' /> */}
			<div className='header'>{props.title}</div>
			<p>{props.body}</p>
		</div>
	);
};

export default Message;
