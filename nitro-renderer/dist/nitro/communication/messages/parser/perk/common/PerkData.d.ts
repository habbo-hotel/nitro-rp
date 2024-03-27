export declare class PerkData {
    private _code;
    private _errorMessage;
    private _isAllowed;
    constructor(code: string, errorMessage: string, isAllowed: boolean);
    get code(): string;
    get errorMessage(): string;
    get isAllowed(): boolean;
}
