

export const calculateBackgroundColor = (documentHeight, scrollPosition) => {
	const percentageScrolled = scrollPosition * 1.5 / documentHeight;
	//console.log(documentHeight, scrollPosition, percentageScrolled);
	return {
		backgroundColor: `rgb(0, 0, 0, ${percentageScrolled})`
	};
};

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
