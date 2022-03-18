import moment from 'moment';

export const hourMonth = date => {
	const formattedDate = moment(date);
	return formattedDate.format('HH:mm a | MMMM Do');
};
