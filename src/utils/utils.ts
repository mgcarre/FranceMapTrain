export class Utils {
    static parsePk(pk: string): number {
        if (pk.includes('+')) {
            return parseFloat(pk.replace('+', '.'));
        } else {
            return parseFloat(`-${pk.replace('-', '.')}`);
        }
    }
}