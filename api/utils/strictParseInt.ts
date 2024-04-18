export default function strictParseInt(value: string) {
    if (/^[0-9]+$/.test(value)) {
        return parseInt(value, 10);
    } else {
        return NaN;
    }
}