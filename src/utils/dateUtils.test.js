import isoToStringDate from "./dateUtils";

test("isoToStringDate returns correctly formatted date", () => {
    expect(isoToStringDate("2020-08-25T14:00:03")).toBe("25 August 2020")
})