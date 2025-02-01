import moment from "moment";

export default function (date: Date, format = "LL") {
    const m = moment(date);
    return m.format(format);
}