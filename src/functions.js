export const timeConvert = (n) => {
	let num = n;
	let hours = Math.floor(num / 60);
	let minutes = Math.round(((num / 60) - hours) * 60);
	return (hours>0 ? `${hours}h ${minutes}m` : `${minutes}m`)
}

export const truncateWords = (str, no_words) => str.split(" ").length > no_words ? str.split(" ").splice(0,no_words).join(" ")+"..." : str