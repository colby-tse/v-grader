/**
 * Description: Handling for v-grader.
 * Author: Colby Tse
 * Date created: 26-06-2026
 */

function main() {
	let inputs = document.querySelectorAll('.input');
	
	inputs.forEach(input => {
		input.addEventListener('input', function () {
			let temp = 0;
			inputs.forEach(input => {
				temp += Number(input.value);
			});

			let grade = temp / inputs.length;

			const frac = grade % 1;
			let level;
			if (frac > 0 && frac < 0.5) {
				level = 'soft ';
			} else if (frac > 0.5) {
				level = 'hard ';
			}

			console.log(`Raw calculation: ${grade}`);

			document.getElementById('result').textContent = `${level ?? ''}v${Math.trunc(grade)}`;
		});
	});
}

function validateInput(input) {
	// Remove non-digits
	let value = input.value.replace(/\D/g, '');

	if (value.length > 0) {
		if (value[0] === '1') {
			// Only allow "1" or "10"
			value = value.slice(0, 2);
			if (value.length === 2 && value[1] !== '0') {
				value = '1';
			}
		} else {
			// Any other first digit must be 0-9, but only one digit
			value = value[0];
		}
	}

	input.value = value;
}

function reset() {
	document.querySelectorAll('.input').forEach(input => {
		input.value = '';
	});
}

main();