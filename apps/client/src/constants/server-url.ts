export const SERVER_URL =
	process.env.NODE_ENV === 'production'
		? 'https://react-ts-follow-ua-parcels-server.onrender.com'
		: 'http://localhost:8000'
