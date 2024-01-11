import { DateInterface, DateUtils } from "../../..";

export class AgeUtils {
    dateUtils: DateUtils;
    constructor() {
        this.dateUtils = new DateUtils();
    }
    private static yearsOfAgeToSupport = 150;
    getMonths() {
        const months = [<option key={''} value={0} />];
        for (let i = 0; i < DateUtils.MONTHS.length; ++i) {
            const month = DateUtils.MONTHS[i];
            months.push(<option key={month} value={i + 1}>{month}</option>);
        }
        return months;
    }

    getDays() {
        const options = [<option value={0} key={0}></option>];
        for (let i = 1; i <= this.dateUtils.getDaysInMonth(); ++i) {
            options.push(<option value={i} key={i}>{i}</option>);
        }
        return options;
    }

    getYears() {
        const currentYear = this.dateUtils.getYear(), options = [<option value={0} key={currentYear}></option>];
        for (let i = currentYear - 1; i >= currentYear - AgeUtils.yearsOfAgeToSupport; --i) {
            options.push(<option value={i} key={i}>{i}</option>)
        }
        return options;
    }
    isAgeElgible(dob: DateInterface) {
        const { day, month, year } = dob;
        const yearDiff = this.dateUtils.getYear() - year;
        if (yearDiff !== 16) return yearDiff > 16;
        if (month != this.dateUtils.getMonth()) return month < this.dateUtils.getMonth();
        return day <= this.dateUtils.getDate();
    }
};