

export const calculateBackgroundColor = (documentHeight, scrollPosition) => {
	const percentageScrolled = 30;
	const f =  {
		backgroundColor: `#000 ${percentageScrolled}%`
	};
	console.log(f);
	return f;
};
