import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID e62006d4251dd7354db1d650496c1460c1e7ff331a44ed7993f32ac757a1331f"
	}
});
