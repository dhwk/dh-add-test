import add from './main'

test('0 + 0 = 0', () => {
	expect(add(0, 0)).toEqual(0)
})

test('1 + 1 = 2', () => {
	expect(add(1, 1)).toEqual(2)
})
