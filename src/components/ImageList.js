import React from "react";

const ImageList = props => {
	return props.images.map(image => {
		console.log(image.id);

		return (
			<li key={image.id}>
				<img src={image.urls.regular} />
			</li>
		);
	});
};

export default ImageList;
