export declare class FriendlyTime {
    private static MINUTE;
    private static HOUR;
    private static DAY;
    private static WEEK;
    private static MONTH;
    private static YEAR;
    static format(seconds: number, key?: string, threshold?: number): string;
    static shortFormat(seconds: number, key?: string, threshold?: number): string;
    static getLocalization(key: string, amount: number): string;
}
