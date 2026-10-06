import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert/strict";
import test from "node:test";

const cases = [
    ["00:00", "12:00 am"],
    ["00:01", "12:01 am"],
    ["01:05", "01:05 am"],
    ["08:00", "08:00 am"],
    ["11:59", "11:59 am"],
    ["12:00", "12:00 pm"],
    ["12:34", "12:34 pm"],
    ["13:00", "01:00 pm"],
    ["13:30", "01:30 pm"],
    ["15:45", "03:45 pm"],
    ["23:00", "11:00 pm"],
    ["23:59", "11:59 pm"],
];

for (const [time, expected] of cases) {
    test(`${time} converts to ${expected}`, () => {
        assert.equal(formatAs12HourClock(time), expected);
    });
}

test("converts every valid minute of the day", () => {
    for (let hour = 0; hour < 24; hour += 1) {
        for (let minute = 0; minute < 60; minute += 1) {
            const time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
            const convertedHour = hour % 12 || 12;
            const period = hour < 12 ? "am" : "pm";
            const expected = `${String(convertedHour).padStart(2, "0")}:${String(minute).padStart(2, "0")} ${period}`;

            assert.equal(formatAs12HourClock(time), expected, time);
        }
    }
});
