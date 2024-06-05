import axios from 'axios';

const baseURL = 'http://localhost:6300/api/v1';
const headers = {
	userID: 'RAI',
	'Content-Type': 'application/json',
};

const appointmentInstance = axios.create({
	baseURL,
	headers,
});

export default appointmentInstance;
