export declare class ChatlineData {
    private readonly _timestamp;
    private readonly _habboId;
    private readonly _username;
    private readonly _message;
    private readonly _hasHighlighting;
    constructor(timestamp: string, habboId: number, username: string, message: string, hasHighlighting: boolean);
    get timestamp(): string;
    get userId(): number;
    get userName(): string;
    get message(): string;
    get hasHighlighting(): boolean;
}
