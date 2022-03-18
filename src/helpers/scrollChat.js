import { animateScroll } from 'react-scroll';

export const scrollToBottomAtMessages = id => {
	animateScroll.scrollToBottom({
		containerId: id,
		duration: 200,
		delay: 0,
		smooth: true,
		offset: 0,
	});
};

export const scrollToBottomAtStart = id => {
	animateScroll.scrollToBottom({
		containerId: id,
		duration: 0,
		delay: 0,
		smooth: true,
		offset: -50,
	});
};
