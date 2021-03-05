function outputNumbers (a) {
	switch (a) {
		case 5: return 'пять'
		case 13: return 'тринадцать'
		case 22: return 'двадцать два'
		case 35: return 'тридцать пять'
		case 98: return 'девяносто восемь'
		default: return a
	}
}
console.log(outputNumbers(5))
console.log(outputNumbers(13))
console.log(outputNumbers(22))
console.log(outputNumbers(35))
console.log(outputNumbers(98))
console.log(outputNumbers(1109))