export declare class SongStartRequestData {
    private _songId;
    private _startPos;
    private _playLength;
    private _playRequestTime;
    private _fadeInSeconds;
    private _fadeOutSeconds;
    constructor(songId: number, startPos: number, playLength: number, fadeInSeconds: number, fadeOutSeconds: number);
    get songId(): number;
    get startPos(): number;
    get playLength(): number;
    get playRequestTime(): number;
    get fadeInSeconds(): number;
    get fadeOutSeconds(): number;
}
