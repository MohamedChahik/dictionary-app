export const useFetchWrapper = () => {
	const handleResponse = (response: Response) => {
		return response.text().then(text => {
			const data = text && JSON.parse(text);

			if (!response.ok) {
				const error = (data && data.message) || response.statusText;
				return Promise.reject(error);
			}

			return data;
		});
	};

	const authHeader = (url: string) => {
		// return auth header with jwt if user is logged in and request is to the api url
		const headers = {
			"Content-Type": "application/json",
			Accept: "application/json",
		};
		return headers;
	};

	const request =
		<T extends { [K in keyof T]: T[K] }>(method: string) =>
		(url: string, body: T) => {
			const requestOptions: RequestInit = {
				method,
				headers: authHeader(url),
			};
			if (body) {
				requestOptions.body = JSON.stringify(body);
			}
			return fetch(url, requestOptions).then(handleResponse);
		};

	return {
		get: request("GET"),
		post: request("POST"),
		put: request("PUT"),
		delete: request("DELETE"),
	};
};
