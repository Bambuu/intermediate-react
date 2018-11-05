

export const calculateBackgroundColor = (documentHeight, scrollPosition) => {
	const percentageScrolled = scrollPosition * 1.5 / documentHeight;
	//console.log(documentHeight, scrollPosition, percentageScrolled);
	return {
		backgroundColor: `rgb(0, 0, 0, ${percentageScrolled})`
	};
};

