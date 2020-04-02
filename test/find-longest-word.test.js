import { findLongestWordLength } from '../find-longest-word';

describe('Find the Longest Word in a String', () => {
	test('findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.', () => {
		expect(typeof findLongestWordLength('The quick brown fox jumped over the lazy dog')).toBe(
			'number'
		);
	});
	test('findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6', () => {
		expect(findLongestWordLength('The quick brown fox jumped over the lazy dog')).toBe(6);
	});
	test('findLongestWordLength("May the force be with you") should return 5', () => {
		expect(findLongestWordLength('May the force be with you')).toBe(5);
	});
	test('findLongestWordLength("Google do a barrel roll") should return 6', () => {
		expect(findLongestWordLength('Google do a barrel roll')).toBe(6);
	});
	test('findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8', () => {
		expect(
			findLongestWordLength('What is the average airspeed velocity of an unladen swallow')
		).toBe(8);
	});
	test('findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19', () => {
		expect(
			findLongestWordLength('What if we try a super-long word such as otorhinolaryngology')
		).toBe(19);
	});
});
