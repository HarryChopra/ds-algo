import { confirmEnding } from '../confirm-ending';

describe('Confirm the Ending', () => {
	test('confirmEnding("Bastian", "n") should return true.', () => {
		expect(confirmEnding('Bastian', 'n')).toBe(true);
	});
	test('confirmEnding("Congratulation", "on") should return true.', () => {
		expect(confirmEnding('Congratulation', 'on')).toBe(true);
	});
	test('confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.', () => {
		expect(
			confirmEnding(
				'Walking on water and developing software from a specification are easy if both are frozen',
				'specification'
			)
		).toBe(false);
	});
	test('confirmEnding("He has to give me a new name", "name") should return true.', () => {
		expect(confirmEnding('He has to give me a new name', 'name')).toBe(true);
	});
	test('confirmEnding("Open sesame", "same") should return true.', () => {
		expect(confirmEnding('Open sesame', 'same')).toBe(true);
	});
	test('confirmEnding("Open sesame", "game") should return false.', () => {
		expect(confirmEnding('Open sesame', 'game')).toBe(false);
	});
	test('confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.', () => {
		expect(
			confirmEnding(
				'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
				'mountain'
			)
		).toBe(false);
	});
	test('confirmEnding("Abstraction", "action") should return true', () => {
		expect(confirmEnding('Abstraction', 'action')).toBe(true);
	});
});
