import { truncateString } from '../truncate-string';

describe('Truncate a String', () => {
	test('truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".', () => {
		expect(truncateString('A-tisket a-tasket A green and yellow basket', 8)).toBe(
			'A-tisket...'
		);
	});
	test('truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".', () => {
		expect(truncateString('Peter Piper picked a peck of pickled peppers', 11)).toBe(
			'Peter Piper...'
		);
	});
	test('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".', () => {
		expect(
			truncateString(
				'A-tisket a-tasket A green and yellow basket',
				'A-tisket a-tasket A green and yellow basket'.length
			)
		).toBe('A-tisket a-tasket A green and yellow basket');
	});
	test('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".', () => {
		expect(
			truncateString(
				'A-tisket a-tasket A green and yellow basket',
				'A-tisket a-tasket A green and yellow basket'.length + 2
			)
		).toBe('A-tisket a-tasket A green and yellow basket');
	});
	test('truncateString("A-", 1) should return "A...".', () => {
		expect(truncateString('A-', 1)).toBe('A...');
	});
	test('truncateString("Absolutely Longer", 2) should return "Ab...".', () => {
		expect(truncateString('Absolutely Longer', 2)).toBe('Ab...');
	});
});
