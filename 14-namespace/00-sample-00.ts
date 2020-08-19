namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    export const config = 1;
}