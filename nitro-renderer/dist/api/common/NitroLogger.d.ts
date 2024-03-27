export declare class NitroLogger {
    static LOG_DEBUG: boolean;
    static LOG_WARN: boolean;
    static LOG_ERROR: boolean;
    static LOG_EVENTS: boolean;
    static LOG_PACKETS: boolean;
    static log(...messages: any[]): void;
    static warn(...messages: any[]): void;
    static error(...messages: any[]): void;
    static events(...messages: any[]): void;
    static packets(...messages: any[]): void;
    private static logPrefix;
}
