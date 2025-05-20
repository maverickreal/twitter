import { DateInterface } from "../../..";

export class DateUtils extends Date {
    constructor() {
        super();
    }
    override getMonth() {
        return super.getMonth() + 1;
    }
    getYear() {
        return super.getFullYear();
    }
    getDaysInMonth(month: number = this.getMonth()) {
        if (month <= 7) {
            if (month === 2) {
                return (this.isLeapYear() ? 29 : 28);
            } else {
                return (month % 2 === 0 ? 30 : 31);
            }
        } else {
            return (month % 2 === 0 ? 31 : 30);
        }
    }
    isLeapYear(year: number = this.getYear()) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
    getLeapYearsInLastNYears(n: number) {
        const leapYears = [];
        for (let year = this.getYear(); year > this.getYear() - n; --year) {
            if (this.isLeapYear(year)) {
                leapYears.push(year);
            }
        }
        return leapYears;
    }
    isDateValid(date: DateInterface) {
        const { day, month, year } = date;
        if (month < 1 || month > 12) return false;
        if (day < 1 || day > this.getDaysInMonth(month)) return false;
        if (!this.isLeapYear(year) && month === 2 && day === 29) return false;
        return true;
    }
    static MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
};
