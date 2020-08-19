import  V from "./00-export-1"

export const numberRegexp = /^[0-9]+$/;
const StringValidator1 = 1;
export class ZipCodeValidator extends V {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}