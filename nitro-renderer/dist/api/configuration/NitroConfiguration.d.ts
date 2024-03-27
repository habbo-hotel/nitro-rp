export declare class NitroConfiguration {
    private static _definitions;
    private static _config;
    private static _missingKeys;
    static parseConfiguration(data: {
        [index: string]: any;
    }, overrides?: boolean): boolean;
    static interpolate(value: string, regex?: RegExp): string;
    private static removeInterpolateKey;
    static getValue<T>(key: string, value?: T): T;
    static setValue<T>(key: string, value: T): void;
    static get definitions(): Map<string, unknown>;
}
