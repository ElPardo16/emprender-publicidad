import { numberF } from "../utils/tools"

test('should return string', () => { 
    expect(typeof numberF.format(1.2525)).toBe("string")
})
test("should return 1,24", () => {
    expect(numberF.format(1.24)).toBe("1,24")
})
test("get 1000 should return 1000", () => {
    expect(numberF.format(1000)).toBe("1000")
})