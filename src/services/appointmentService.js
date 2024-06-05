/* eslint-disable import/no-anonymous-default-export */

import appointmentInstance from '../config/appointmentInstance';

const makeAnAppointment = (data) => {
	return appointmentInstance.post('/appointments', data);
};

export default {
	makeAnAppointment,
};
