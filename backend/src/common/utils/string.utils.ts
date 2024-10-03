export class StringUtils {
    static toArray(stringInput: string): string[] {
        const formattedStringArray = stringInput.replace(/'/g, '"');

        const stringArray = JSON.parse(formattedStringArray);

        return stringArray;
    }

    static toMoneyString(price: number): string {
        const formattedPrice = (price * 1000).toLocaleString('vi-VN');
        return `${formattedPrice} VND`;
    }
}