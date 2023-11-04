function getArrayParams(...arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let sum = arr.reduce(function(sum, currentValue) {
		return sum + currentValue;
	})

	let avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr == 0) {
		return 0;
	}

	let sum = arr.reduce((sum, currentValue) => (sum + currentValue))
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr == 0) {
		return 0;
	}

	let max = Math.max(...arr);
	let min = Math.min(...arr);
	return max - min;

}

function differenceEvenOddWorker(...arr) {
	if (arr == 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	let difference = sumEvenElement - sumOddElement;
	return difference;
}

function averageEvenElementsWorker(...arr) {
	if (arr == 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	let average = sumEvenElement / countEvenElement;
	return average;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const maximum = func(...arrOfArr[i]);
		if (maximum > maxWorkerResult) {
			maxWorkerResult = maximum;
		}
	}
	return maxWorkerResult;
}
