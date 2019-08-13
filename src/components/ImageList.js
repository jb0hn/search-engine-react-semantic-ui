import React from "react";

const ImageList = props => {
	return props.images.map(({ id, urls, alt_description }) => {
		return (
			<div key={id}>
				<img src={urls.regular} alt={alt_description} />
			</div>
		);
	});
};

export default ImageList;
