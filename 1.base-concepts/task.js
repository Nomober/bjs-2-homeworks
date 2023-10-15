"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c

	if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a)
		let x2 = (-b - Math.sqrt(d)) / (2 * a)
		arr.push(x1, x2)
	} else if (d === 0) {
		let x = -b / (2 * a)
		arr.push(x)
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent / 100;
	let S = amount - contribution;
	let n = countMonths;
	let P = percent / 12;
	let paymentMonth = S * (P + (P / (((1 + P) ** n) - 1)));
	let paymentAll = paymentMonth * countMonths;

	return Number(paymentAll.toFixed(2));
}